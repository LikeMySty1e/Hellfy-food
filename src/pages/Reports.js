import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Container} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ReportsTabEnum from "../enums/ReportsTabEnum";
import HijackingByEmployee from "./reports/HijackingByEmployee/HijackingByEmployee";
import HijackingByMark from "./reports/HijackingByMark/HijackingByMark";
import FineByDriver from "./reports/FineByDriver/FineByDriver";
import ProtocolByDriver from "./reports/ProtocolByDriver/ProtocolByDriver";

const Reports = observer(() => {
    const {main} = useContext(Context)

    return (
        <Container className={"mt-3"}>
            <Tabs
                defaultActiveKey={ReportsTabEnum.HijackingByEmployee}
                transition={true}
                id="noanim-tab-example"
                className="mb-3"
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