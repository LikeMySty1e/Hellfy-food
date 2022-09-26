import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import ProtocolPositionRow from "./ProtocolPositionRow";

const ProtocolPosition = observer(() => {
    return (
        <Container>
            <Table striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Описание</th>
                    <th>Протокол</th>
                    <th>Данные видеофиксации</th>
                    <th>Штраф</th>
                </tr>
                </thead>
                <tbody>
                <ProtocolPositionRow data={{
                    index: 1,
                    id: 1,
                    description: `В начале было слово...`,
                    protocol: 2,
                    video: 3,
                    fine: 4
                }}/>
                <ProtocolPositionRow data={{
                    index: 2,
                    id: 2,
                    description: `...и слово было "конец"`,
                    protocol: 4,
                    video: 1,
                    fine: 5
                }}/>
                </tbody>
            </Table>
        </Container>
    );
});

ProtocolPosition.propTypes = {

};

export default ProtocolPosition;