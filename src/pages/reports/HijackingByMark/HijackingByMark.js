import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import HijackingByMarkRow from "./HijackingByMarkRow";
import {Context} from "../../../index";
import ReportsTabEnum from "../../../enums/ReportsTabEnum";

const HijackingByMark = observer(() => {
    const {main} = useContext(Context);

    React.useEffect(() => {
        if (main.activeTab === ReportsTabEnum.HijackingByMark) {
            main.getTable(`report_by_mark_view`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <HijackingByMarkRow key={`hijackingByMark_${row.mark}`} data={{
            index: index + 1,
            reportCount: row.count,
            mark: row.mark
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== ReportsTabEnum.HijackingByMark) {
        return <Container>
            Загрузка данных...
        </Container>
    }

    return (
        <Container>
            <Table striped responsive hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Сотрудник</th>
                    <th>Кол-во в угоне</th>
                </tr>
                </thead>
                <tbody>
                {getRows()}
                </tbody>
            </Table>
        </Container>
    );
});

HijackingByMark.propTypes = {

};

export default HijackingByMark;