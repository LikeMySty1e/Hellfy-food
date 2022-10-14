import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import {Context} from "../../../index";
import CarRow from "./CarRow";
import tableTabEnum from "../../../enums/TableTabEnum";
import ProtocolRow from "../Protocol/ProtocolRow";

const Car = observer(() => {
    const {main} = useContext(Context);

    // React.useEffect(() => {
    //     if (main.activeTab === tableTabEnum.Car) {
    //         main.setTable(`select_cars`);
    //     }
    // }, [main.activeTab]);
    //
    // const getRows = () => {
    //     return main.table.map((row, index) => <CarRow data={{
    //         index: index + 1,
    //         id: row.car_id,
    //         number: `А115КА58`,
    //         engine: 1.6,
    //         mark: `Mazda`,
    //         insurance: `12.04.2002`,
    //         model: `2`,
    //         owner: 1
    //     }} />)
    //     // <ProtocolRow data={{
    //     //     index: index + 1,
    //     //     id: row.protocol_id,
    //     //     registration: row.reg_date,
    //     //     status: row.status,
    //     //     violator: row.violator_id,
    //     //     victim: row.victim_id
    //     // }}/>);
    // };

    if (main.isLoading || main.isTableEmpty) {
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
                    <th>Id</th>
                    <th>Рег. номер</th>
                    <th>Марка</th>
                    <th>Модель</th>
                    <th>Дата страхования</th>
                    <th>Объём двигателя</th>
                    <th>Водитель</th>
                </tr>
                </thead>
                <tbody>
                {/*{getRows()}*/}
                </tbody>
            </Table>
        </Container>
    );
});

Car.propTypes = {

};

export default Car;