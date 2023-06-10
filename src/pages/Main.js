import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Container from "../components/common/Container/Container";
import Week from "../components/Week/Week";
import FoodMarket from "../components/FoodMarket/FoodMarket";
import Switch, { Color } from "../components/common/Switch";
import './style.m.scss';

const Main = observer(() => {
    const {main} = useContext(Context);

    return <React.Fragment>
        <Container isFlex>
            <Week />
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