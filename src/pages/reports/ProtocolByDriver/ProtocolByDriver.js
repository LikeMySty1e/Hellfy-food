import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import ProtocolByDriverRow from "./ProtocolByDriverRow";

const ProtocolByDriver = observer(() => {
    return (
        <Container>
            <Table style={{ maxHeight: 500, overflowY: `auto` }} striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Фио правонарушителя</th>
                    <th>Кол-во протоколов</th>
                </tr>
                </thead>
                <tbody>
                <ProtocolByDriverRow data={{
                    index: 1,
                    driver: `Жмышенко Валерий Петрович`,
                    protocolCount: 5
                }} />
                <ProtocolByDriverRow data={{
                    index: 2,
                    driver: `Жмышенко Валерий Петрович`,
                    protocolCount: 12
                }} />
                <ProtocolByDriverRow data={{
                    index: 3,
                    driver: `Жмышенко Валерий Петрович`,
                    protocolCount: 20
                }} />
                </tbody>
            </Table>
        </Container>
    );
});

ProtocolByDriver.propTypes = {

};

export default ProtocolByDriver;