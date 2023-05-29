export const mapIngredients = (ingredients = []) => {
    return ingredients.map(ingredient => {
        return {
            text: ingredient.name,
            value: ingredient.id
        }
    });
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
            blackListIngredients: model.blackListIngredients.map(ingredient => ingredient.value)
        }
    };
}

export default {
    mapIngredients,
    mapUserModelToSave
};
