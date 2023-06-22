import DaysEnum from "../enums/DaysEnum";
import profResource from "../resources/profResource";

export const mapIngredients = (ingredients = []) => {
    return ingredients.map(ingredient => {
        return {
            text: ingredient.name,
            value: ingredient.id
        }
    });
};

export const mapPlan = (plan = []) => {
    return plan.map(day => {
        return {
            ...day,
            day: DaysEnum[day.day?.trim()]
        };
    });
};

const mapIngredient = (ingredient = {}) => {
    return { value: ingredient.id, text: ingredient.name };
};

export const mapBackendUserModel = (model = {}) => {
    const profession = profResource.find(prof => prof.text === model.profession);
    const mappedFavourites = model.favouriteIngredients.map(ingredient => mapIngredient(ingredient));
    const mappedUnfavoured = model.unfavouredIngredients.map(ingredient => mapIngredient(ingredient));
    const mappedBlacklist = model.blacklistIngredients.map(ingredient => mapIngredient(ingredient));

    return {
        ...model,
        profession,
        favouriteIngredients: mappedFavourites,
        unfavouredIngredients: mappedUnfavoured,
        blacklistIngredients: mappedBlacklist
    };
};

export const mapUserModelToSave = model => {
    return {
        username: `Cum`,
        password: model.password,
        email: model.email,
        personInfo: {
            forPersonal: model.forPersonal || false,
            necessaryOnly: model.necessaryOnly || false,
            isEnthusiast: model.isEnthusiast || false,
            subscription: model.subscription || false,
            gender: model.gender,
            name: model.name,
            weight: parseFloat(model.weight),
            height: parseFloat(model.height),
            age: parseFloat(model.age),
            isDigestive: model.isDigestive || false,
            isAllergic: model.isAllergic || false,
            profession: model.profession?.text || ``,
            favouriteIngredients: model.favouriteIngredients.map(ingredient => ingredient.value),
            unfavouredIngredients: model.unfavouredIngredients.map(ingredient => ingredient.value),
            blackListIngredients: model.blacklistIngredients.map(ingredient => ingredient.value)
        }
    };
}

export const mapUserModelToEdit = model => {
    return {
        forPersonal: model.forPersonal || false,
        necessaryOnly: model.necessaryOnly || false,
        isEnthusiast: model.isEnthusiast || false,
        subscription: model.subscription || false,
        gender: model.gender,
        name: model.name,
        weight: parseFloat(model.weight),
        height: parseFloat(model.height),
        age: parseFloat(model.age),
        isDigestive: model.isDigestive || false,
        isAllergic: model.isAllergic || false,
        profession: model.profession?.text || ``,
        favouriteIngredients: model.favouriteIngredients.map(ingredient => ingredient.value),
        unfavouredIngredients: model.unfavouredIngredients.map(ingredient => ingredient.value),
        blackListIngredients: model.blacklistIngredients.map(ingredient => ingredient.value)
    };
}

export default {
    mapIngredients,
    mapUserModelToSave,
    mapPlan
};
