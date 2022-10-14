import {makeAutoObservable} from 'mobx';
import localStorageHelper from "../helpers/localStorageHelper";
import httpClientHelper from "../http/httpClientHelper";
import jsonParser from "../helpers/jsonParser";
import tableTabEnum from "../enums/TableTabEnum";

export default class MainStore {
    _isAuth = false;
    login = null;
    token = null;
    settings = {

    };
    table = [];
    activeTab = localStorage.getItem(`activeTab`) || tableTabEnum.Protocol;
    timeZoneUsing = false;
    pendingState = {
        loading: true,
        isSavingDemand: false
    };

    constructor() {
        this.init();
        makeAutoObservable(this);
    }

    // ACTION //

    init = () => {
        this.initAuth();
    }

    initAuth = () => {
        const localToken = localStorageHelper.getLocalToken();

        if (!localToken) {
            this._isAuth = false;

            return null;
        }

        this._isAuth = true;
        this.token = localToken;
    }

    setTable = async url => {
        this.setLoading(true);
        this.table = [];

        httpClientHelper.get(url)
            .then(data => {
                console.log(data)
                this.table = jsonParser.parseArray(data.data);
                this.setLoading(false);
            });
    }

    setToken = token => {
        this.token = token;
        localStorageHelper.setLocalToken(token);
    }

    setIsAuth = isAuth => {
        this._isAuth = isAuth;
    }

    setLoading = state => {
        this.pendingState.loading = !!state;
    }

    setTimeZoneUsing = e => {
        this.timeZoneUsing = e.target.checked;
    }

    setActiveTab = tab => {
        localStorage.setItem(`activeTab`, tab);
        this.table = [];
        this.activeTab = tab;
    }

    unauthorise = () => {
        this.token = null;
        this._isAuth = false;
        localStorageHelper.deleteLocalToken();
    }

    // COMPUTED //

    get isAuth() {
        return this._isAuth;
    }

    get isTimeZonesUsing() {
        return this.timeZoneUsing;
    }

    get isLoading() {
        return this.pendingState.loading;
    }

    get isTableEmpty() {
        return !this.table.length;
    }
}