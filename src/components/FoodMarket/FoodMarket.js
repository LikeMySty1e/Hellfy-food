import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import FoodCard from "../FoodCard/FoodCard";
import Ingredient from "./components/Ingredient/Ingredient";
import Container from "../common/Container/Container";
import './style.css';

let timeoutIndex;
let scrollTimeoutIndex;

const FoodMarket = observer(props => {
    const {main} = React.useContext(Context);
    const [food, setFood] = React.useState(main.foodByDay);
    const [selected, setSelected] = React.useState(null);
    // const [recipe, setRecipe] = React.useState({});
    const [isFadeout, setIsFadeout] = React.useState(false);
    const recipeRef = React.useRef(null);

    const currentFoodData = React.useMemo(() => main.getFoodById(selected), [selected]);

    React.useEffect(() => {
        clearTimeout(timeoutIndex);
        setIsFadeout(true);

        timeoutIndex = setTimeout(() => {
            setIsFadeout(false);
            setFood(main.foodByDay);
        }, 450);
    }, [main.day, main.isSnacksDisabled]);

    React.useEffect(() => {
        return () => main.clear();
    }, []);

    const onFoodCardClick = async id => {
        setSelected(food.find(meal => meal.id === id));
        clearTimeout(scrollTimeoutIndex);
        const initialY = document.documentElement.scrollTop;
        // const recipeData = await main.loadRecipe(id);

        // setRecipe(recipeData);

        // if (!recipeData.id) {
        //     window.scrollTo({ top: 0, behavior: 'smooth' })
        //
        //     return;
        // }
        //
        // if (Math.abs(document.documentElement.scrollTop - initialY) < 50) {
        //     scrollTimeoutIndex = setTimeout(() => window.scrollTo({
        //         top: recipeRef.current.offsetTop,
        //         behavior: 'smooth'
        //     }), 250);
        // }
    }

    const renderFoods = () => {
        return <div className="food__market">
            {food.map(data => <FoodCard
                onClick={onFoodCardClick}
                isFadeout={isFadeout}
                key={data.brunch}
                {...data}
            />)}
        </div>
    }

    const renderRecipe = () => {
        // if (!recipe.id) {
        //     return null;
        // }

        return <div ref={recipeRef} className="food__recipe">
            {/*<div className="recipe__info">*/}
            {/*    {currentFoodData.id && <div className="food__data">*/}
            {/*        <div className="recipe__title">{currentFoodData.title}</div>*/}
            {/*        {currentFoodData.description}*/}
            {/*        <div className="recipe__portions">*/}
            {/*            Для {recipe.portions > 1 ? `${recipe.portions} персон` : `${recipe.portions} персоны`}*/}
            {/*        </div>*/}
            {/*    </div>}*/}
            {/*    {recipe.ingredients && <div className="food__ingredients">*/}
            {/*        {recipe.ingredients.map(ingredient => <Ingredient ingredient={ingredient} />)}*/}
            {/*    </div>}*/}
            {/*</div>*/}
            {/*{recipe.steps.length && <div className="food__steps">*/}
            {/*    {recipe.steps.map((step, index) => <div key={index} className="food__step">*/}
            {/*        <span className="food__step--index">{index + 1}.</span>*/}
            {/*        {step.description}*/}
            {/*    </div>)}*/}
            {/*</div>}*/}
        </div>
    };

    return <Container>
        {renderFoods()}
        {renderRecipe()}
    </Container>;
});

FoodMarket.propTypes = {

};

export default FoodMarket;