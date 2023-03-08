import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import FoodCard from "../FoodCard/FoodCard";
import './style.css';

let timeoutIndex;

const FoodMarket = observer(props => {
    const {main} = React.useContext(Context);
    const [food, setFood] = React.useState(main.foodByDay);
    const [recipe, setRecipe] = React.useState([]);
    const [isFadeout, setIsFadeout] = React.useState(false);

    React.useEffect(() => {
        clearTimeout(timeoutIndex);
        setIsFadeout(true);

        timeoutIndex = setTimeout(() => {
            setIsFadeout(false);
            setFood(main.foodByDay)
        }, 450);
    }, [main.day]);

    return <React.Fragment>
        <div className="food__market">
            {food.map(data => <FoodCard
                isFadeout={isFadeout}
                key={data.brunch}
                {...data}
            />)}
        </div>
        {recipe.length && <div className="food__recipe">

        </div>}
    </React.Fragment>;
});

FoodMarket.propTypes = {

};

export default FoodMarket;