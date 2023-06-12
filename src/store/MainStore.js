import {makeAutoObservable, runInAction} from 'mobx';
import localStorageHelper from "../helpers/localStorageHelper";
import UserModel from "../models/UserModel";
import DateHelper from "../helpers/dateHelper";
import DaysEnum from "../enums/DaysEnum";
import BrunchEnum from "../enums/BrunchEnum";
import {mapBackendUserModel, mapIngredients, mapPlan, mapUserModelToSave} from '../mappers/userDataMapper';
import {getIngredients, getFoodPlan, loginUser, registrateUser, getUserInfo} from "../services/userDataService";

export default class MainStore {
    userModel = { ...UserModel };
    _isAuth = false;
    token = null;
    day = DateHelper.getDayOfWeek();
    activeTab = null;
    isSnacksDisabled = true;

    ingredients = [];
    food = [];

    validationState = {
        auth: ``
    };
    pendingState = {
        auth: true,
        userInfo: false,
        plan: false,
        ingredients: true,
    };

    constructor() {
        this.init();
        makeAutoObservable(this);
    }

    // ACTION //

    init = async () => {
        this.initAuth();
        this.updateSnacks();

        await this.initIngredients();
    }

    initAuth = () => {
        const localToken = localStorageHelper.getLocalToken();

        if (!localToken) {
            this.setIsAuth(false);

            return null;
        }

        this.setIsAuth(true);
        this.setToken(localToken);

        this.loadUserInfo();
    }

    loadPlan = async () => {
        if (!this.isAuth || this.pendingState.plan) {
            return;
        }

        console.trace()

        this.setLoading(`plan`, true);

        try {
            const food = await getFoodPlan(this.token);

            this.food = mapPlan(food);

            // if (ok) {
                // this.ingredients = result;
            // }
        } catch (e) {
            console.error(e.message);
        } finally {
            this.setLoading(`plan`, false);
        }
    }

    loadUserInfo = async () => {
        if (!this.isAuth) {
            return;
        }

        this.setLoading(`userInfo`, true);

        try {
            const { ok, result } = await getUserInfo();

            if (!ok) {
                throw new Error(`Ошибка загрузки данных пользователя`);
            }

            runInAction(() => {
                this.userModel = { ...this.userModel, ...mapBackendUserModel(result) };
            });
        } catch (e) {
            console.error(e.message);
        } finally {
            this.setLoading(`userInfo`, false);
        }
    }

    initIngredients = async () => {
        this.setLoading(`ingredients`, true);

        try {
            const { result = [], ok } = await getIngredients();

            if (ok) {
                runInAction(() => {
                    this.ingredients = mapIngredients(result);
                });
            }
        } catch (e) {
            console.error(e.message);
        } finally {
            this.setLoading(`ingredients`, false);
        }
    }

    login = async (login, password) => {
        this.setLoading(`auth`, true);

        try {
            const { result = {}, ok, description } = await loginUser({ login, password });

            if (!ok) {
                this.setValidationError(`auth`, description);

                return false;
            }

            if (result.token) {
                localStorageHelper.setLocalToken(result.token);
                this.setIsAuth(true);
            }

            return true;
        } catch (e) {
            console.error(e.message);
        } finally {
            this.setLoading(`auth`, false);
            this.loadUserInfo();
        }
    }

    registrate = async (registration = {}) => {
        this.setLoading(`auth`, true);

        try {
            const userModel = { ...mapUserModelToSave(registration) };
            const { ok, description } = await registrateUser(userModel);

            if (!ok) {
                this.setValidationError(`auth`, description);

                return false;
            }


            this.setUserModel(userModel);
            const result = await this.login(userModel.email, userModel.password);
            return !!result;
        } catch (e) {
            console.error(e.message);
        } finally {
            this.setLoading(`auth`, false);
        }
    }

    setFoodChecked = (value, id) => {
        const currentMeal = this.foodByDay.find(meal => meal.id === id);

        if (!currentMeal) {
            return;
        }

        currentMeal.checked = value;
    }

    updateSnacks = () => {
        this.isSnacksDisabled = localStorage.getItem(this.snacksStorageKey) === `true`;
    }

    setUserData = (updatedData = {}) => {
        this.userModel = { ...this.userModel, ...updatedData };
    }

    //  SETS  //

    setFood = food => {
        this.food = food || [];
    }

    setDay = day => {
        this.day = Object.values(DaysEnum).includes(day) ? day : DaysEnum.monday;
        this.updateSnacks();
    }

    setSnacks = value => {
        this.isSnacksDisabled = !!value;
        localStorage.setItem(this.snacksStorageKey, value);
    }

    setUserModel = (model = {}) => {
        this.userModel = { ...UserModel, ...model };
    }

    setToken = token => {
        this.token = token;

        if (!token) {
            localStorageHelper.deleteLocalToken();

            return;
        }

        localStorageHelper.setLocalToken(token);
    }

    setAlert = alert => {
        this.alert = `${alert}`;
    }

    setIsAuth = isAuth => {
        this._isAuth = isAuth;
    }

    setValidationError = (field, value) => {
        if (this.validationState.hasOwnProperty(field)) {
            this.validationState[field] = `${value}`;
        }
    }

    setLoading = (field, value) => {
        if (this.pendingState.hasOwnProperty(field)) {
            this.pendingState[field] = !!value;
        }
    }

    setActiveTab = tab => {
        localStorage.setItem(`activeTab`, tab);
        this.table = [];
        this.activeTab = tab;
    }

    clear = () => {
        this.setFood();
    }

    unauthorise = () => {
        this.setToken(null);
        this.setIsAuth(false);

        this.clear();
        localStorageHelper.deleteLocalToken();
    }

    // COMPUTED //

    get snacksStorageKey() {
        return `snacks_disabled_${this.day}`;
    }

    get isAuth() {
        return this._isAuth;
    }

    get foodByDay() {
        const { foods = [] } = this.food.find(food => food.day === this.day) || {};

        return this.isSnacksDisabled ? foods.filter(food => food.mealtime !== BrunchEnum.snack) : foods;
    }
}