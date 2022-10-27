import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Context} from "../index";
import {Alert, Container} from "react-bootstrap";
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
import tableTabEnum from "../enums/TableTabEnum";

// lcp --proxyUrl http://176.99.10.146:5000

const Main = observer(() => {
    const {main} = useContext(Context);

    const getDefaultKey = () => {
        const localKey = localStorage.getItem(`activeTab`);

        if (Object.values(TableTabEnum).includes(localKey)) {
            return localKey;
        }

        main.setActiveTab(TableTabEnum.Protocol);
        return TableTabEnum.Protocol;
    }

    return (
        <>
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
        </>
    );
});

export default Main;