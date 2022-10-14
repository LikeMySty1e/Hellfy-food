import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import ProtocolPositionRow from "./ProtocolPositionRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import ProtocolPositionAddModal from "./ProtocolPositionAddModal";
import tableTabEnum from "../../../enums/TableTabEnum";

const ProtocolPosition = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false);

    React.useEffect(() => {
        if (main.activeTab === tableTabEnum.ProtocolPosition) {
            main.setTable(`select_protocol_positions`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <ProtocolPositionRow key={`protocol_position_${row.protocol_pos_id}`} data={{
            index: index + 1,
            id: row.protocol_pos_id,
            description: row.description,
            protocol: row.protocol_id,
            video: row.video_id,
            fine: row.fine_id
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== tableTabEnum.ProtocolPosition) {
        return <Container>
            Загрузка данных...
        </Container>
    }

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
                    {getRows()}
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