import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import HijackingRow from "./HijackingRow";
import {Context} from "../../../index";
import TableTabEnum from "../../../enums/TableTabEnum";
import HijackingAddModal from "./HijackingAddModal";
import tableTabEnum from "../../../enums/TableTabEnum";

const Hijacking = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false);

    React.useEffect(() => {
        if (main.activeTab === tableTabEnum.Hijacking) {
            main.setTable(`select_hijacking_claims`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <HijackingRow key={`hijacking_${row.claim_id}`} data={{
            index: index + 1,
            id: row.claim_id,
            incidentDate: row.incident_date,
            relevance: row.relevance,
            owner: row.owner_id,
            employee: row.employee_id,
            car: row.car_id
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== tableTabEnum.Hijacking) {
        return <Container>
            Загрузка данных...
        </Container>
    }

    return (
        <>
            <Container>
                <Button
                    id={TableTabEnum.Hijacking}
                    className="mb-3"
                    size="sm"
                    variant="outline-primary"
                    style={{ width: `100%` }}
                    onClick={() => setIsShow(true)}
                >
                    + Заявление
                </Button>
            </Container>
            <Container style={{ maxHeight: 500, overflowY: `auto` }}>
                <Table striped responsive hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Дата проишествия</th>
                        <th>Актуальность</th>
                        <th>Водитель</th>
                        <th>Сотрудник</th>
                        <th>Автомобиль</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getRows()}
                    </tbody>
                </Table>
            </Container>

            <HijackingAddModal isShow={isShow} handleClose={() => setIsShow(false)} />
        </>
    );
});

Hijacking.propTypes = {

};

export default Hijacking;