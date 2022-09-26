import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import InterceptionRow from "./InterceptionRow";

const Interception = observer(() => {
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
                    <th>Данные видеофиксации</th>
                </tr>
                </thead>
                <tbody>
                <InterceptionRow data={{
                    index: 1,
                    id: 1,
                    begin: `12.04.2002`,
                    end: `12.04.2002`,
                    status: true,
                    hijacker: `Иван Иванович ИванОвич`,
                    claim: 3,
                    video: 4
                }}/>
                <InterceptionRow data={{
                    index: 2,
                    id: 2,
                    begin: `12.04.2002`,
                    end: `12.04.2002`,
                    status: true,
                    hijacker: `Иван Иванович ИванОвич`,
                    claim: 3,
                    video: 4
                }}/>
                </tbody>
            </Table>
        </Container>
    );
});

Interception.propTypes = {

};

export default Interception;