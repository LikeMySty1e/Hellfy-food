import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import PositionRow from "./PositionRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import PositionAddModal from "./PositionAddModal";
import tableTabEnum from "../../../enums/TableTabEnum";

const Position = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false);

    React.useEffect(() => {
        if (main.activeTab === tableTabEnum.Position) {
            main.setTable(`select_positions`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <PositionRow key={`position_${row.position_id}`} data={{
            index: index + 1,
            id: row.position_id,
            name: row.name,
            description: row.description,
            salary: row.salary
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== tableTabEnum.Position) {
        return <Container>
            Загрузка данных...
        </Container>
    }

    return (
        <>
            <Container>
                <Button
                    id={TableTabEnum.Position}
                    className="mb-3"
                    size="sm"
                    variant="outline-primary"
                    style={{ width: `100%` }}
                    onClick={() => setIsShow(true)}
                >
                    + Должность
                </Button>
            </Container>
            <Container style={{ maxHeight: 500, overflowY: `auto` }}>
                <Table striped responsive hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Должность</th>
                        <th>Описание</th>
                        <th>Оклад</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getRows()}
                    </tbody>
                </Table>
            </Container>

            <PositionAddModal isShow={isShow} handleClose={() => setIsShow(false)} />
        </>
    );
});

Position.propTypes = {

};

export default Position;