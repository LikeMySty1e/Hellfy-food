import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import EmployeeRow from "./EmployeeRow";
import {Context} from "../../../index";
import TableTabEnum from "../../../enums/TableTabEnum";
import EmployeeAddModal from "./EmployeeAddModal";

const Employee = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false)

    return (
        <>
            <Container>
                <Button
                    id={TableTabEnum.Employee}
                    className="mb-3"
                    size="sm"
                    variant="outline-primary"
                    style={{ width: `100%` }}
                    onClick={() => setIsShow(true)}
                >
                    + Сотрудник
                </Button>
            </Container>
            <Container style={{ maxHeight: 500, overflowY: `auto` }}>
                <Table striped responsive hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>ФИО</th>
                        <th>Дата рождения</th>
                        <th>Контракт</th>
                        <th>Номер телефона</th>
                        <th>Должность</th>
                        <th>Звание</th>
                    </tr>
                    </thead>
                    <tbody>
                    <EmployeeRow data={{
                        index: 1,
                        id: 1,
                        fullname: `Пол Ол Джонсон`,
                        birthday: `12.04.2002`,
                        contract: `121322536457`,
                        phone: `+79633356789`,
                        position: `Капитан`,
                        rank: 15
                    }} />
                    <EmployeeRow data={{
                        index: 2,
                        id: 2,
                        fullname: `Пол Ол Джонсон`,
                        birthday: `12.04.2002`,
                        contract: `121322536457`,
                        phone: `+79633356789`,
                        position: `Капитан`,
                        rank: 16
                    }} />
                    <EmployeeRow data={{
                        index: 3,
                        id: 3,
                        fullname: `Пол Ол Джонсон`,
                        birthday: `12.04.2002`,
                        contract: `121322536457`,
                        phone: `+79633356789`,
                        position: `Капитан`,
                        rank: 5
                    }} />
                    </tbody>
                </Table>
            </Container>

            <EmployeeAddModal isShow={isShow} handleClose={() => setIsShow(false)} />
        </>
    );
});

Employee.propTypes = {

};

export default Employee;