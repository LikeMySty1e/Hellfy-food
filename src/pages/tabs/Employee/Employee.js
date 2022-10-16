import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import EmployeeRow from "./EmployeeRow";
import {Context} from "../../../index";
import TableTabEnum from "../../../enums/TableTabEnum";
import EmployeeAddModal from "./EmployeeAddModal";
import tableTabEnum from "../../../enums/TableTabEnum";
import urls from "../../../resources/urls";

const Employee = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false)

    React.useEffect(() => {
        if (main.activeTab === tableTabEnum.Employee) {
            main.getTable(urls.getEmployee);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <EmployeeRow key={`employee_${row.employee_id}`} data={{
            index: index + 1,
            id: row.employee_id,
            fullname: row.fullname,
            birthday: row.birth_date,
            contract: row.contract_number,
            phone: row.phone_number,
            position: row.position_id,
            rank: 15
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== tableTabEnum.Employee) {
        return <Container>
            Загрузка данных...
        </Container>
    }

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
                    {getRows()}
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