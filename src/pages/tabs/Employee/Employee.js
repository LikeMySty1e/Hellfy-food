import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import EmployeeRow from "./EmployeeRow";

const Employee = observer(() => {
    return (
        <Container>
            <Table style={{ maxHeight: 500, overflowY: `auto` }} striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>ФИО</th>
                    <th>Дата рождения</th>
                    <th>Контракт</th>
                    <th>Номер телефона</th>
                    <th>Должность</th>
                    <th>Звание</th>
                </tr>
                </thead>
                <tbody>
                <EmployeeRow data={{
                    index: 1,
                    id: 1,
                    fullname: `Пол Ол Джонсон`,
                    birthday: `12.04.2002`,
                    contract: `121322536457`,
                    phone: `+79633356789`,
                    position: `Капитан`,
                    rank: `Третий разряд`
                }} />
                <EmployeeRow data={{
                    index: 2,
                    id: 2,
                    fullname: `Пол Ол Джонсон`,
                    birthday: `12.04.2002`,
                    contract: `121322536457`,
                    phone: `+79633356789`,
                    position: `Капитан`,
                    rank: `Третий разряд`
                }} />
                <EmployeeRow data={{
                    index: 3,
                    id: 3,
                    fullname: `Пол Ол Джонсон`,
                    birthday: `12.04.2002`,
                    contract: `121322536457`,
                    phone: `+79633356789`,
                    position: `Капитан`,
                    rank: `Третий разряд`
                }} />
                </tbody>
            </Table>
        </Container>
    );
});

Employee.propTypes = {

};

export default Employee;