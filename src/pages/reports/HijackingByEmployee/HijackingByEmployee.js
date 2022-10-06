import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import HijackingByEmployeeRow from "./HijackingByEmployeeRow";

const HijackingByEmployee = observer(() => {
    return (
        <Container>
            <Table style={{ maxHeight: 500, overflowY: `auto` }} striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Сотрудник</th>
                    <th>Раскрыто угонов</th>
                </tr>
                </thead>
                <tbody>
                <HijackingByEmployeeRow data={{
                    index: 1,
                    employee: `Жмышенко Валерий Петрович`,
                    reportCount: 4
                }} />
                <HijackingByEmployeeRow data={{
                    index: 1,
                    employee: `Жмышенко Валерий Петрович`,
                    reportCount: 4
                }} />
                <HijackingByEmployeeRow data={{
                    index: 1,
                    employee: `Жмышенко Валерий Петрович`,
                    reportCount: 4
                }} />
                </tbody>
            </Table>
        </Container>
    );
});

HijackingByEmployee.propTypes = {

};

export default HijackingByEmployee;