import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import ProtocolRow from "./ProtocolRow";

const Protocol = observer(() => {
    return (
        <Container>
            <Table striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Дата регистрации</th>
                    <th>Статус</th>
                    <th>Нарушитель</th>
                    <th>Потерпевший</th>
                </tr>
                </thead>
                <tbody>
                <ProtocolRow data={{
                    index: 1,
                    id: 1,
                    registration: `12.04.2002`,
                    status: true,
                    violator: 3,
                    victim: 4
                }}/>
                <ProtocolRow data={{
                    index: 2,
                    id: 2,
                    registration: `12.04.2002`,
                    status: true,
                    violator: 3,
                    victim: 4
                }}/>
                </tbody>
            </Table>
        </Container>
    );
});

Protocol.propTypes = {

};

export default Protocol;