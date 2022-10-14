import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import FineRow from "./FineRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import FineAddModal from "./FineAddModal";
import tableTabEnum from "../../../enums/TableTabEnum";

const Fine = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false);

    React.useEffect(() => {
        if (main.activeTab === tableTabEnum.Fine) {
            main.setTable(`select_fines`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <FineRow key={`fine_${row.fine_id}`} data={{
            index: index + 1,
            id: row.fine_id,
            payment: row.payment_amount,
            status: row.status
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== tableTabEnum.Fine) {
        return <Container>
            Загрузка данных...
        </Container>
    }

    return (
        <>
            <Container>
                <Button
                    id={TableTabEnum.Fine}
                    className="mb-3"
                    size="sm"
                    variant="outline-primary"
                    style={{ width: `100%` }}
                    onClick={() => setIsShow(true)}
                >
                    + Штраф
                </Button>
            </Container>
            <Container style={{ maxHeight: 500, overflowY: `auto` }}>
                <Table striped responsive hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Сумма штрафа</th>
                        <th>Статус оплаты</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getRows()}
                    </tbody>
                </Table>
            </Container>

            <FineAddModal isShow={isShow} handleClose={() => setIsShow(false)} />
        </>
    );
});

Fine.propTypes = {

};

export default Fine;