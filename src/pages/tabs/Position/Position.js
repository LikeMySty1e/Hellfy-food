import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import PositionRow from "./PositionRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import PositionAddModal from "./PositionAddModal";

const Position = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false)

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
                    <PositionRow data={{
                        index: 1,
                        id: 1,
                        name: `Патрульный`,
                        description: `Вопреки всем законам логики, патрульный патрулирует`,
                        salary: 70000
                    }}/>
                    <PositionRow data={{
                        index: 2,
                        id: 2,
                        name: `Инспектор`,
                        description: `Нет, вы не поверите, проводит инспекцию`,
                        salary: 30000
                    }}/>
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