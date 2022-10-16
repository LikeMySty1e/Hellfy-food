import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import ProtocolRow from "./ProtocolRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import ProtocolAddModal from "./ProtocolAddModal";
import tableTabEnum from "../../../enums/TableTabEnum";
import urls from "../../../resources/urls";

const Protocol = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false);

    React.useEffect(() => {
        if (main.activeTab === tableTabEnum.Protocol) {
            main.getTable(urls.getProtocol);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <ProtocolRow key={`protocol_${row.protocol_id}`} data={{
                index: index + 1,
                id: row.protocol_id,
                registration: row.reg_date,
                status: row.status,
                violator: row.violator_id,
                victim: row.victim_id
            }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== tableTabEnum.Protocol) {
        return <Container>
            Загрузка данных...
        </Container>
    }

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
                    {getRows()}
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