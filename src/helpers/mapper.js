import ingredient from "../components/FoodMarket/components/Ingredient/Ingredient";

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