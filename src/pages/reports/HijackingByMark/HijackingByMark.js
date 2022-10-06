import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import HijackingByMarkRow from "./HijackingByMarkRow";

const HijackingByMark = observer(() => {
    return (
        <Container>
            <Table striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Сотрудник</th>
                    <th>Кол-во в угоне</th>
                </tr>
                </thead>
                <tbody>
                <HijackingByMarkRow data={{
                    index: 1,
                    mark: `Лада`,
                    reportCount: 4
                }} />
                <HijackingByMarkRow data={{
                    index: 1,
                    mark: `Mazda`,
                    reportCount: 4
                }} />
                <HijackingByMarkRow data={{
                    index: 1,
                    mark: `Mitsubishi`,
                    reportCount: 4
                }} />
                </tbody>
            </Table>
        </Container>
    );
});

HijackingByMark.propTypes = {

};

export default HijackingByMark;