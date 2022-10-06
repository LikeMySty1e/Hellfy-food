import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import ProtocolPositionRow from "./ProtocolPositionRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import ProtocolPositionAddModal from "./ProtocolPositionAddModal";

const ProtocolPosition = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false)

    return (
        <>
            <Container>
                <Button
                    id={TableTabEnum.ProtocolPosition}
                    className="mb-3"
                    size="sm"
                    variant="outline-primary"
                    style={{ width: `100%` }}
                    onClick={() => setIsShow(true)}
                >
                    + Позиция протокола
                </Button>
            </Container>
            <Container style={{ maxHeight: 500, overflowY: `auto` }}>
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

            <ProtocolPositionAddModal isShow={isShow} handleClose={() => setIsShow(false)} />
        </>
    );
});

ProtocolPosition.propTypes = {

};

export default ProtocolPosition;