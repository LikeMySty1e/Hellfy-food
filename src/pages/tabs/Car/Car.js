import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import CarRow from "./CarRow";

const Car = observer(() => {
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
                <CarRow data={{
                    index: 1,
                    id: 1,
                    number: `А115КА58`,
                    engine: 1.6,
                    mark: `Mazda`,
                    insurance: `12.04.2002`,
                    model: `2`,
                    owner: 1
                }} />
                <CarRow data={{
                    index: 1,
                    id: 1,
                    number: `А115КА58`,
                    engine: 1.6,
                    mark: `Mazda`,
                    insurance: `12.04.2002`,
                    model: `2`,
                    owner: 1
                }} />
                <CarRow data={{
                    index: 1,
                    id: 1,
                    number: `А115КА58`,
                    engine: 1.6,
                    mark: `Mazda`,
                    insurance: `12.04.2002`,
                    model: `2`,
                    owner: 1
                }} />
                </tbody>
            </Table>
        </Container>
    );
});

Car.propTypes = {

};

export default Car;