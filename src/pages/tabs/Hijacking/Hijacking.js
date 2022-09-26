import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import HijackingRow from "./HijackingRow";

const Hijacking = observer(() => {
    return (
        <Container>
            <Table striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Дата проишествия</th>
                    <th>Актуальность</th>
                    <th>Водитель</th>
                    <th>Сотрудник</th>
                    <th>Автомобиль</th>
                </tr>
                </thead>
                <tbody>
                <HijackingRow data={{
                    index: 1,
                    id: 1,
                    incidentDate: `12.04.2002`,
                    relevance: true,
                    owner: 6,
                    employee: 3,
                    car: 2
                }}/>
                <HijackingRow data={{
                    index: 2,
                    id: 2,
                    incidentDate: `12.04.2002`,
                    relevance: false,
                    owner: 3,
                    employee: 5,
                    car: 1
                }}/>
                </tbody>
            </Table>
        </Container>
    );
});

Hijacking.propTypes = {

};

export default Hijacking;