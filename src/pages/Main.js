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
        // setTimeout(() => setFood([
        //     <FoodCard brunch={BrunchImagesEnum.breakfast}/>,
        //     <FoodCard brunch={BrunchImagesEnum.lunch}/>,
        //     <FoodCard brunch={BrunchImagesEnum.snack}/>,
        //     <FoodCard brunch={BrunchImagesEnum.dinner}/>
        // ]), 3000);
        main.setFood(getFoodPlan())
    }, []);

    // const getDefaultKey = () => {
    //     const localKey = localStorage.getItem(`activeTab`);
    //
    //     if (Object.values(TableTabEnum).includes(localKey)) {
    //         return localKey;
    //     }
    //
    //     main.setActiveTab(TableTabEnum.Protocol);
    //     return TableTabEnum.Protocol;
    // }

    return <React.Fragment>
        <Container>
            <Week />
        </Container>
        <FoodMarket />

        {/*<Alert*/}
        {/*    style={{ width: `100%` }}*/}
        {/*    show={main.isAlert}*/}
        {/*    onClose={() => main.setAlert(``)}*/}
        {/*    variant="danger"*/}
        {/*    dismissible*/}
        {/*>*/}
        {/*    <p style={{ marginBottom: 0 }}>Возникла ошибка: {main.alert}</p>*/}
        {/*</Alert>*/}
        {/*<Tabs*/}
        {/*    defaultActiveKey={getDefaultKey()}*/}
        {/*    transition={true}*/}
        {/*    className="mb-3"*/}
        {/*    onSelect={main.setActiveTab}*/}
        {/*>*/}
        {/*    <Tab eventKey={TableTabEnum.Employee} title={`Сотрудники`}>*/}
        {/*        <Employee />*/}
        {/*    </Tab>*/}
        {/*</Tabs>*/}
    </React.Fragment>;
});

export default Main;