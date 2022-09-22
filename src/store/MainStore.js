import {makeAutoObservable} from 'mobx';

export default class MainStore {
    _isAuth = false;
    login = null;
    password = null;
    token = null;
    settings = {

    };
    table = [];
    pendingState = {
        loading: true,
        isSavingDemand: false,
        isSavingFiles: false,
        isDeletingFile: false,
        isDeletingClause: false
    };

    constructor() {
        this.init();
        makeAutoObservable(this);
    }

    // ACTION //

    init = () => {

    }

    // COMPUTED //

    get isAuth() {
        return this._isAuth;
    }
}