import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import InterceptionRow from "./InterceptionRow";
import {Context} from "../../../index";
import TableTabEnum from "../../../enums/TableTabEnum";
import InterceptionAddModal from "./InterceptionAddModal";
import tableTabEnum from "../../../enums/TableTabEnum";
import urls from "../../../resources/urls";

const Interception = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false);

    React.useEffect(() => {
        if (main.activeTab === tableTabEnum.Interception) {
            main.getTable(urls.getInterception);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <InterceptionRow key={`plan_${row.plan_id}`} data={{
            index: index + 1,
            id: row.plan_id,
            begin: row.begin_date,
            end: row.end_date,
            status: row.status,
            hijacker: row.hijacker_fullname,
            claim: row.claim_id,
            video: row.video_id
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== tableTabEnum.Interception) {
        return <Container>
            Загрузка данных...
        </Container>
    }

    return (
        <>
            <Container>
                <Button
                    id={TableTabEnum.Interception}
                    className="mb-3"
                    size="sm"
                    variant="outline-primary"
                    style={{ width: `100%` }}
                    onClick={() => setIsShow(true)}
                >
                    + План-перехват
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
                        <th>Данные видеофиксации</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getRows()}
                    </tbody>
                </Table>
            </Container>

            <InterceptionAddModal isShow={isShow} handleClose={() => setIsShow(false)} />
        </>
    );
});

Interception.propTypes = {

};

export default Interception;