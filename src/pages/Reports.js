import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Alert, Container} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ReportsTabEnum from "../enums/ReportsTabEnum";
import HijackingByEmployee from "./reports/HijackingByEmployee/HijackingByEmployee";
import HijackingByMark from "./reports/HijackingByMark/HijackingByMark";
import FineByDriver from "./reports/FineByDriver/FineByDriver";
import ProtocolByDriver from "./reports/ProtocolByDriver/ProtocolByDriver";

const Reports = observer(() => {
    const {main} = useContext(Context);

    const getDefaultKey = () => {
        const localKey = localStorage.getItem(`activeTab`);

        if (Object.values(ReportsTabEnum).includes(localKey)) {
            return localKey;
        }

        main.setActiveTab(ReportsTabEnum.HijackingByEmployee);
        return ReportsTabEnum.HijackingByEmployee;
    }

    return (
        <Container className={"mt-3"}>
            <Alert
                style={{ width: `100%` }}
                show={main.isAlert}
                onClose={() => main.setAlert(``)}
                variant="danger"
                dismissible
            >
                <p style={{ marginBottom: 0 }}>Возникла ошибка: {main.alert}</p>
            </Alert>
            <Tabs
                defaultActiveKey={getDefaultKey()}
                transition={true}
                className="mb-3"
                onSelect={main.setActiveTab}
            >
                <Tab eventKey={ReportsTabEnum.HijackingByEmployee} title={`Раскрытые угоны`}>
                    <HijackingByEmployee />
                </Tab>
                <Tab eventKey={ReportsTabEnum.HijackingByMark} title={"Статистика угоняемости"}>
                    <HijackingByMark />
                </Tab>
                <Tab eventKey={ReportsTabEnum.ProtocolByDriver} title={"Статистика нарушений ПДД"}>
                    <ProtocolByDriver />
                </Tab>
                <Tab eventKey={ReportsTabEnum.FineByDriver} title={"Сведения о штрафах"}>
                    <FineByDriver />
                </Tab>
            </Tabs>
        </Container>
    );
});

export default Reports;