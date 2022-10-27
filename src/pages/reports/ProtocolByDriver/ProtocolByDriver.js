import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import ProtocolByDriverRow from "./ProtocolByDriverRow";
import {Context} from "../../../index";
import ReportsTabEnum from "../../../enums/ReportsTabEnum";
import HijackingByEmployeeRow from "../HijackingByEmployee/HijackingByEmployeeRow";

const ProtocolByDriver = observer(() => {
    const {main} = useContext(Context);

    React.useEffect(() => {
        if (main.activeTab === ReportsTabEnum.ProtocolByDriver) {
            main.getTable(`protocol_by_driver_view`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <ProtocolByDriverRow key={`hijackingByEmployee_${row.car_owner}`} data={{
            index: index + 1,
            protocolCount: row.count,
            driver: row.car_owner
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== ReportsTabEnum.ProtocolByDriver) {
        return <Container>
            Загрузка данных...
        </Container>
    }

    return (
        <Container>
            <Table style={{ maxHeight: 500, overflowY: `auto` }} striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Фио правонарушителя</th>
                    <th>Кол-во протоколов</th>
                </tr>
                </thead>
                <tbody>
                {getRows()}
                </tbody>
            </Table>
        </Container>
    );
});

ProtocolByDriver.propTypes = {

};

export default ProtocolByDriver;