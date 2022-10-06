import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import FineRow from "./FineRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import FineAddModal from "./FineAddModal";

const Fine = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false)

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
                    <FineRow data={{
                        index: 1,
                        id: 1,
                        payment: 10000,
                        status: true
                    }}/>
                    <FineRow data={{
                        index: 2,
                        id: 2,
                        payment: 70000,
                        status: false
                    }}/>
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