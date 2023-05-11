import {makeAutoObservable, values} from 'mobx';
import localStorageHelper from "../helpers/localStorageHelper";
// import httpClientHelper from "../http/httpClientHelper";
// import jsonParser from "../helpers/jsonParser";
import UserModel from "../models/UserModel";
import DateHelper from "../helpers/dateHelper";
import DaysEnum from "../enums/DaysEnum";
import {getRecipe} from "../services/userDataService";

export default class MainStore {
    _isAuth = false;
    login = null;
    token = null;
    settings = {
        timeZoneUsing: false
    };
    userModel = { ...UserModel };
    table = [];
    food = [];
    recipesCache = [];
    day = DateHelper.getDayOfWeek();
    activeTab = null;
    pendingState = {
        loading: true
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

    setTable = table => {
        this.table = table || [];
    }

    setFood = food => {
        this.food = food || [];
    }

    setFoodChecked = (value, id) => {
        const currentMeal = this.foodByDay.find(meal => meal.id === id);

        if (!currentMeal) {
            return;
        }

        currentMeal.checked = value;
    }

    cacheRecipe = recipe => {
        if (recipe.id && !this.cachedRecipeIds.includes(recipe.id)) {
            this.recipesCache.push(recipe);
        }
    }

    loadRecipe = async id => {
        const cachedRecipe = this.recipesCache.find(recipe => recipe.id === id);

        if (cachedRecipe) {
            return cachedRecipe;
        }

        const recipe = await getRecipe(id);

        if (recipe.id) {
            this.recipesCache.push(recipe);

            return recipe;
        }

        return {};
    }

    updateUserData = (field, value) => {
        if (this.userModel.hasOwnProperty(field)) {
            this.userModel[field] = value;
        }
    }

    setDay = day => {
        this.day = Object.values(DaysEnum).includes(day) ? day : DaysEnum.monday;
    }

    setUserModel = (model = {}) => {
        this.userModel = { ...UserModel, ...model };
    }

    // getTable = async url => {
    //     this.setLoading(true);
    //     this.setTable();
    //
    //     httpClientHelper.get(url)
    //         .then(response => {
    //             console.log(response)
    //             if (response?.data?.status === `error`) {
    //                 this.setAlert(response.data.message || `Возникла ошибка во время загрузки данных`);
    //
    //                 return null;
    //             }
    //
    //             this.setTable(jsonParser.parseArray(response.data));
    //             this.setLoading(false);
    //         });
    // }

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
        this.token = null;
        this._isAuth = false;
        this.clear();
        localStorageHelper.deleteLocalToken();
    }

    // COMPUTED //

    get isAuth() {
        return this._isAuth;
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

    get foodByDay() {
        const currentDayFood = this.food.find(food => food.day === this.day);

        return currentDayFood?.data || [];
    }

    get cachedRecipeIds() {
        return this.recipesCache.map(recipe => recipe.id);
    }

    getFoodById(id) {
        return this.foodByDay.find(foodData => foodData.id === id) || null;
    }
}