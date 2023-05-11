export const format = (arr = []) => {
    let count = 0;

    return arr.map(el => {
        count += 1;

        return {
            text: el,
            value: count
        }
    })
}

export const mapUserModel = model => {
    return {
        forPersonal: model.forPersonal,
        necessaryOnly: model.necessaryOnly,
        isEnthusiast: model.isEnthusiast,
        login: model.login,
        password: model.password,
        email: model.email,
        subscription: model.subscription,
        gender: model.gender,
        name: model.name,
        weight: model.weight,
        height: model.height,
        age: model.age,
        isDigestive: model.isDigestive,
        isAllergic: model.isAllergic,
        profession: model.profession,
        favouriteIngredients: model.favouriteIngredients,
        unfavouredIngredients: model.unfavouredIngredients,
        blackListIngredients: model.blackListIngredients
    }
}