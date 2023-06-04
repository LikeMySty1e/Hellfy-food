import React from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import FoodCard from "../FoodCard/FoodCard";
import Ingredient from "./components/Ingredient/Ingredient";
import Container from "../common/Container/Container";
import './style.css';

let timeoutIndex;
let scrollTimeoutIndex;

const FoodMarket = observer(() => {
    const {main} = React.useContext(Context);
    const [food, setFood] = React.useState(main.foodByDay);
    const [selected, setSelected] = React.useState(null);
    const [isFadeout, setIsFadeout] = React.useState(false);
    const recipeRef = React.useRef(null);

    React.useEffect(() => {
        clearTimeout(timeoutIndex);
        setIsFadeout(true);
        setSelected(null);

        timeoutIndex = setTimeout(() => {
            setIsFadeout(false);
            setFood(main.foodByDay);
        }, 450);
    }, [main.day, main.isSnacksDisabled, main.foodByDay]);

    React.useEffect(() => {
        main.loadPlan();

        return () => main.clear();
    }, []);

    const onFoodCardClick = mealtime => {
        setSelected(food.find(meal => meal.mealtime === mealtime));
        clearTimeout(scrollTimeoutIndex);
        const initialY = document.documentElement.scrollTop;

        if (Math.abs(document.documentElement.scrollTop - initialY) < 50) {
            scrollTimeoutIndex = setTimeout(() => window.scrollTo({
                top: recipeRef.current.offsetTop,
                behavior: 'smooth'
            }), 250);
        }
    };

    const renderFoods = () => {
        return <div className="food__market">
            {food.map(data => <FoodCard
                onClick={onFoodCardClick}
                isFadeout={isFadeout}
                key={data.mealtime}
                {...data}
            />)}
        </div>;
    };

    const renderRecipe = () => {
        if (!selected || !selected.mealtimeFood) {
            return null;
        }

        const { mealtimeFood } = selected;

        return <div ref={recipeRef} className="food__recipe">
            <div className="recipe__info">
                <div className="food__data">
                    <div className="recipe__title">{mealtimeFood.name}</div>
                    {mealtimeFood.description}
                    <div className="recipe__portions">
                        Для {mealtimeFood.portions > 1
                        ? `${mealtimeFood.portions} персон`
                        : `${mealtimeFood.portions} персоны`}
                    </div>
                </div>
                {mealtimeFood.ingredients && <div className="food__ingredients">
                    {mealtimeFood.ingredients.map(ingredient => <Ingredient ingredient={ingredient} />)}
                </div>}
            </div>
            {mealtimeFood.steps.length && <div className="food__steps">
                {mealtimeFood.steps.map((step, index) => <div key={index} className="food__step">
                    <span className="food__step--index">{index + 1}.</span>
                    {step.description}
                </div>)}
            </div>}
        </div>
    };

    return <Container>
        {renderFoods()}
        {renderRecipe()}
    </Container>;
});

export default FoodMarket;