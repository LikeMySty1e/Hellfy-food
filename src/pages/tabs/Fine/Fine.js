import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import FineRow from "./FineRow";

const Fine = observer(() => {
    return (
        <Container>
            <Table striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Сумма штрафа</th>
                    <th>Статус оплаты</th>
                </tr>
                </thead>
                <tbody>
                <FineRow data={{
                    index: 1,
                    id: 1,
                    payment: 10000,
                    status: true
                }}/>
                <FineRow data={{
                    index: 2,
                    id: 2,
                    payment: 70000,
                    status: false
                }}/>
                </tbody>
            </Table>
        </Container>
    );
});

Fine.propTypes = {

};

export default Fine;