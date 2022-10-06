import React from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import FineByDriverRow from "./FineByDriverRow";
import TableTabEnum from "../../../enums/TableTabEnum";

const FineByDriver = observer(() => {
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
                <FineByDriverRow data={{
                    index: 1,
                    driver: `Жмышенко Валерий Петрович`,
                    fineCount: 5,
                    fineSum: `15000`
                }} />
                <FineByDriverRow data={{
                    index: 2,
                    driver: `Жмышенко Валерий Петрович`,
                    fineCount: 4,
                    fineSum: `150000`
                }} />
                <FineByDriverRow data={{
                    index: 3,
                    driver: `Жмышенко Валерий Петрович`,
                    fineCount: 1,
                    fineSum: `5000`
                }} />
                </tbody>
            </Table>
        </Container>
    );
});

FineByDriver.propTypes = {

};

export default FineByDriver;