import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Container from "../components/common/Container/Container";
import FoodCard from "../components/FoodCard/FoodCard";
import './style.m.css';
import BrunchImagesEnum from "../enums/BrunchImagesEnum";
import {getFoodPlan} from "../services/userDataService";
import Week from "../components/Week/Week";
import FoodMarket from "../components/FoodMarket/FoodMarket";

// lcp --proxyUrl http://176.99.10.146:5000

const Main = observer(() => {
    const {main} = useContext(Context);

    React.useEffect(() => {
        main.setFood(getFoodPlan())
    }, []);

    return <React.Fragment>
        <Container>
            <Week />
        </Container>
        <FoodMarket />
    </React.Fragment>;
});

export default Main;