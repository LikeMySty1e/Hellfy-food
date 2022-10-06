import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import HijackingRow from "./HijackingRow";
import {Context} from "../../../index";
import TableTabEnum from "../../../enums/TableTabEnum";
import HijackingAddModal from "./HijackingAddModal";

const Hijacking = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false)

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
                    <HijackingRow data={{
                        index: 1,
                        id: 1,
                        incidentDate: `12.04.2002`,
                        relevance: true,
                        owner: 6,
                        employee: 3,
                        car: 2
                    }}/>
                    <HijackingRow data={{
                        index: 2,
                        id: 2,
                        incidentDate: `12.04.2002`,
                        relevance: false,
                        owner: 3,
                        employee: 5,
                        car: 1
                    }}/>
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