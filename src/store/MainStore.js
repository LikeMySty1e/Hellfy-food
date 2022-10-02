import {makeAutoObservable} from 'mobx';
import localStorageHelper from "../helpers/localStorageHelper";

export default class MainStore {
    _isAuth = false;
    login = null;
    token = null;
    settings = {

    };
    table = [];
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

    setToken = token => {
        this.token = token;
        localStorageHelper.setLocalToken(token);
    }

    setIsAuth = isAuth => {
        this._isAuth = true;
    }

    unauthorise = () => {
        this.token = null;
        this._isAuth = false;
        localStorageHelper.deleteLocalToken();
    }

    setTimeZoneUsing = e => {
        this.timeZoneUsing = e.target.checked;
    }

    // COMPUTED //

    get isAuth() {
        return this._isAuth;
    }

    get isTimeZonesUsing() {
        return this.timeZoneUsing;
    }
}