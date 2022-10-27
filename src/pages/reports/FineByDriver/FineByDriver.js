import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import ReportsTabEnum from "../../../enums/ReportsTabEnum";
import FineByDriverRow from "./FineByDriverRow";
import {Context} from "../../../index";

const FineByDriver = observer(() => {
    const {main} = useContext(Context);

    React.useEffect(() => {
        if (main.activeTab === ReportsTabEnum.FineByDriver) {
            main.getTable(`fine_by_driver_view`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <FineByDriverRow key={`fineByDriver_${row.car_owner}`} data={{
            index: index + 1,
            fineCount: row.count,
            fineSum: row.sum,
            driver: row.car_owner
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== ReportsTabEnum.FineByDriver) {
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
                    <th>Кол-во штрафов</th>
                    <th>Сумма штрафов</th>
                </tr>
                </thead>
                <tbody>
                {getRows()}
                </tbody>
            </Table>
        </Container>
    );
});

FineByDriver.propTypes = {

};

export default FineByDriver;