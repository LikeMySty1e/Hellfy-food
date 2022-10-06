import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Context} from "../index";
import {Container} from "react-bootstrap";
import TableTabEnum from "../enums/TableTabEnum";
import Protocol from "./tabs/Protocol/Protocol";
import Employee from "./tabs/Employee/Employee";
import Hijacking from "./tabs/Hijacking/Hijacking";
import Driver from "./tabs/Driver/Driver";
import Car from "./tabs/Car/Car";
import Video from "./tabs/Video/Video";
import ProtocolPosition from "./tabs/ProtocolPosition/ProtocolPosition";
import Interception from "./tabs/Interception/Interception";
import Fine from "./tabs/Fine/Fine";
import Position from "./tabs/Position/Position";

const Main = observer(() => {
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
                <Tab eventKey={TableTabEnum.Hijacking} title={"Заявления"}>
                    <Hijacking />
                </Tab>
                <Tab eventKey={TableTabEnum.Interception} title={"План-перехват"}>
                    <Interception />
                </Tab>
                <Tab eventKey={TableTabEnum.Employee} title={`Сотрудники`}>
                    <Employee />
                </Tab>
                <Tab eventKey={TableTabEnum.Position} title={`Должность`}>
                    <Position />
                </Tab>
                <Tab eventKey={TableTabEnum.Driver} title={'Водители'}>
                    <Driver />
                </Tab>
                <Tab eventKey={TableTabEnum.Car} title={"Автомобили"}>
                    <Car />
                </Tab>
                <Tab eventKey={TableTabEnum.Video} title={"Видеофиксация"}>
                    <Video />
                </Tab>
            </Tabs>
        </Container>
    );
});

export default Main;