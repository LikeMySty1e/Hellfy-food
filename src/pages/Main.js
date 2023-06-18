import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Container from "../components/common/Container/Container";
import Week from "../components/Week/Week";
import FoodMarket from "../components/FoodMarket/FoodMarket";
import Switch, { Color } from "../components/common/Switch";
import RoundButton, {ButtonDirection} from "../components/common/buttons/RoundButton";
import { ReactComponent as DishIcon } from "../icons/common/dish.m.svg";
import './style.m.scss';

const Main = observer(() => {
    const {main} = useContext(Context);

    const onGenerateClick = () => {
        main.clear();

        setTimeout(() => main.generatePlan(), 500);
    };

    return <React.Fragment>
        <Container isFlex>
            <Week />
            <RoundButton
                canBeActive={false}
                classname="food__button--generate"
                direction={ButtonDirection.block}
                iconDirection={ButtonDirection.top}
                Icon={DishIcon}
                onClick={onGenerateClick}
            />
            <div className="snacks">
                Полдник
                <Switch
                    value={!main.isSnacksDisabled}
                    onChange={() => main.setSnacks(!main.isSnacksDisabled)}
                    color={Color.green}
                />
            </div>
        </Container>
        {!main.pendingState.ingredients && <FoodMarket />}
    </React.Fragment>;
});

export default Main;