import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Container} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import TableTabEnum from "../enums/TableTabEnum";
import Tab from "react-bootstrap/Tab";
import Protocol from "./tabs/Protocol/Protocol";
import ProtocolPosition from "./tabs/ProtocolPosition/ProtocolPosition";
import Fine from "./tabs/Fine/Fine";

const Reports = observer(() => {
    const {main} = useContext(Context)

    return (
        <Container className={"mt-3"}>
            <Tabs
                defaultActiveKey={TableTabEnum.Protocol}
                transition={true}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey={TableTabEnum.Protocol} title={`Протоколы`}>
                    <Protocol />
                </Tab>
                <Tab eventKey={TableTabEnum.ProtocolPosition} title={"Позиция протокола"}>
                    <ProtocolPosition />
                </Tab>
                <Tab eventKey={TableTabEnum.Fine} title={"Штраф"}>
                    <Fine />
                </Tab>

            </Tabs>
        </Container>
    );
});

export default Reports;