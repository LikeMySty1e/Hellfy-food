import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import HijackingByEmployeeRow from "./HijackingByEmployeeRow";
import {Context} from "../../../index";
import ReportsTabEnum from "../../../enums/ReportsTabEnum";

const HijackingByEmployee = observer(() => {
    const {main} = useContext(Context);

    React.useEffect(() => {
        if (main.activeTab === ReportsTabEnum.HijackingByEmployee) {
            main.getTable(`report_by_employee_view`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <HijackingByEmployeeRow key={`hijackingByEmployee_${row.name}`} data={{
            index: index + 1,
            reportCount: row.count,
            employee: row.name
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== ReportsTabEnum.HijackingByEmployee) {
        return <Container>
            Загрузка данных...
        </Container>
    }

    return (
        <Container>
            <Table style={{ maxHeight: 500, overflowY: `auto` }} striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Сотрудник</th>
                    <th>Раскрыто угонов</th>
                </tr>
                </thead>
                <tbody>
                {getRows()}
                </tbody>
            </Table>
        </Container>
    );
});

HijackingByEmployee.propTypes = {

};

export default HijackingByEmployee;