import {makeAutoObservable} from 'mobx';
import localStorageHelper from "../helpers/localStorageHelper";
import httpClientHelper from "../http/httpClientHelper";
import jsonParser from "../helpers/jsonParser";
import tableTabEnum from "../enums/TableTabEnum";

export default class MainStore {
    _isAuth = false;
    login = null;
    token = null;
    alert = ``;
    settings = {
        timeZoneUsing: false
    };
    table = [];
    activeTab = null;
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
        this.setActiveTab(localStorage.getItem(`activeTab`) || tableTabEnum.Protocol);
        this.setAlert(`Убейте меня`);
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

    setTable = table => {
        this.table = table || [];
    }

    getTable = async url => {
        this.setLoading(true);
        this.setTable();

        httpClientHelper.get(url)
            .then(response => {
                console.log(response)
                if (response?.data?.status === `error`) {
                    this.setAlert(response.data.message || `Возникла ошибка во время загрузки данных`);

                    return null;
                }

                this.setTable(jsonParser.parseArray(response.data));
                this.setLoading(false);
            });
    }

    deleteRow = async ({ id, property }, url) => {
        httpClientHelper.get(url)
            .then(response => {
                if (response?.data?.status === `error`) {
                    this.setAlert(response.data.message || `Возникла ошибка во время добавления новых данных`);

                    return null;
                }

                this.setAlert(``);
                this.setTable(this.table.filter(row => row[property] !== id));
            });
    }

    addRow = async (url, data, table) => {
        httpClientHelper.post(url, data)
            .then(response => {
                if (response?.data?.status === `error`) {
                    this.setAlert(response.data.message || `Возникла ошибка во время добавления новых данных`);

                    return null;
                }

                this.setAlert(``);
                this.getTable(table);
            });
    }

    updateRow = async (url, data, table) => {
        httpClientHelper.post(url, data)
            .then(response => {
                if (response?.data?.status === `error`) {
                    this.setAlert(response.data.message || `Возникла ошибка во время обновления данных`);

                    return null;
                }

                this.setAlert(``);
                this.getTable(table);
            });
    }

    setToken = token => {
        this.token = token;
        localStorageHelper.setLocalToken(token);
    }

    setAlert = alert => {
        this.alert = `${alert}`;
    }

    setIsAuth = isAuth => {
        this._isAuth = isAuth;
    }

    setLoading = state => {
        this.pendingState.loading = !!state;
    }

    setTimeZoneUsing = e => {
        this.settings.timeZoneUsing = e.target.checked;
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

    get isAlert() {
        return !!this.alert;
    }

    get isTimeZonesUsing() {
        return this.settings.timeZoneUsing;
    }

    get isLoading() {
        return this.pendingState.loading;
    }

    get isTableEmpty() {
        return !this.table.length;
    }
}