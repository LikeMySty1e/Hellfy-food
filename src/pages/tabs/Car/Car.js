import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import {Context} from "../../../index";
import CarRow from "./CarRow";
import tableTabEnum from "../../../enums/TableTabEnum";

const Car = observer(() => {
    const {main} = useContext(Context);

    React.useEffect(() => {
        if (main.activeTab === tableTabEnum.Car) {
            main.getTable(`select_cars`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <CarRow key={`car_${row.car_id}`} data={{
            index: index + 1,
            id: row.car_id,
            number: row.reg_number,
            engine: row.engine_volume,
            mark: row.mark_id,
            insurance: row.insurance_date,
            model: row.model_id,
            owner: row.owner_id
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== tableTabEnum.Car) {
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
                {getRows()}
                </tbody>
            </Table>
        </Container>
    );
});

Car.propTypes = {

};

export default Car;