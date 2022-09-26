import {makeAutoObservable} from 'mobx';

export default class MainStore {
    _isAuth = false;
    login = null;
    password = null;
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