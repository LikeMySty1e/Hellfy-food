import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import ProtocolRow from "./ProtocolRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import ProtocolAddModal from "./ProtocolAddModal";

const Protocol = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false)

    return (
        <>
            <Container>
                <Button
                    id={TableTabEnum.Protocol}
                    className="mb-3"
                    size="sm"
                    variant="outline-primary"
                    style={{ width: `100%` }}
                    onClick={() => setIsShow(true)}
                >
                    + Протокол
                </Button>
            </Container>
            <Container style={{ maxHeight: 500, overflowY: `auto` }}>
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
                        violatorId: 3,
                        victimId: 4,
                        violator: `Абоба Иванович`,
                        victim: `ЫЫЫЫЫЫЫЫЫЫЫ`
                    }}/>
                    <ProtocolRow data={{
                        index: 2,
                        id: 2,
                        registration: `12.04.2002`,
                        status: true,
                        violatorId: 3,
                        victimId: 4,
                        violator: `Абоба Иванович`,
                        victim: `ЫЫЫЫЫЫЫЫЫЫЫ`
                    }}/>
                    </tbody>
                </Table>
            </Container>

            <ProtocolAddModal isShow={isShow} handleClose={() => setIsShow(false)} />
        </>
    );
});

Protocol.propTypes = {

};

export default Protocol;