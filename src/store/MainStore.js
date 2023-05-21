import {makeAutoObservable, reaction, runInAction} from 'mobx';
import localStorageHelper from "../helpers/localStorageHelper";
import UserModel from "../models/UserModel";
import DateHelper from "../helpers/dateHelper";
import DaysEnum from "../enums/DaysEnum";
import BrunchEnum from "../enums/BrunchEnum";
import { mapIngredients, mapUserModelToSave } from '../mappers/userDataMapper';
import {getIngredients, getFoodPlan, loginUser, registrateUser} from "../services/userDataService";

export default class MainStore {
    userModel = { ...UserModel };
    _isAuth = false;
    token = null;
    day = DateHelper.getDayOfWeek();
    activeTab = null;
    isSnacksDisabled = true;

    recipesCache = [];
    ingredients = [];
    food = [];

    validationState = {
        auth: ``
    };
    pendingState = {
        auth: true,
        plan: true,
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
        await this.loadPlan();
    }

    initAuth = () => {
        const localToken = localStorageHelper.getLocalToken();

        if (!localToken) {
            this.setIsAuth(false);

            return null;
        }

        this.setIsAuth(true);
        this.setToken(localToken);

        reaction(() => this.isAuth, () => {
            this.loadPlan();
        });
    }

    loadPlan = async () => {
        if (!this.isAuth) {
            return;
        }

        this.setLoading(`plan`, true);

        try {
            const { result = [], ok } = await getFoodPlan(this.token);

            if (ok) {
                // this.ingredients = result;
            }
        } catch (e) {
            console.error(e.message);
        } finally {
            this.setLoading(`plan`, false);
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

    updateUserData = (field, value) => {
        if (this.userModel.hasOwnProperty(field)) {
            this.userModel[field] = value;
        }
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
        this.recipesCache = [];
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
        const { data = [] } = this.food.find(food => food.day === this.day) || {};

        return this.isSnacksDisabled ? data.filter(food => food.brunch !== BrunchEnum.sweetSnack) : data;
    }

    get cachedRecipeIds() {
        return this.recipesCache.map(recipe => recipe.id);
    }

    getFoodById(id) {
        return this.foodByDay.find(foodData => foodData.id === id) || null;
    }
}