import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import DriverRow from "./DriverRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import DriverAddModal from "./DriverAddModal";
import tableTabEnum from "../../../enums/TableTabEnum";

const Driver = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false);

    React.useEffect(() => {
        if (main.activeTab === tableTabEnum.Driver) {
            main.setTable(`select_car_owners`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <DriverRow key={`driver_${row.owner_id}`} data={{
            index: index + 1,
            id: row.owner_id,
            fullname: row.fullname,
            birthday: row.birth_date,
            license: row.drive_license,
            criminal: row.criminal
        }}/>);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== tableTabEnum.Driver) {
        return <Container>
            Загрузка данных...
        </Container>
    }

    return (
        <>
            <Container>
                <Button
                    id={TableTabEnum.Driver}
                    className="mb-3"
                    size="sm"
                    variant="outline-primary"
                    style={{ width: `100%` }}
                    onClick={() => setIsShow(true)}
                >
                    + Водитель
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
                        <th>Водительские права</th>
                        <th>Судимость</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getRows()}
                    </tbody>
                </Table>
            </Container>

            <DriverAddModal isShow={isShow} handleClose={() => setIsShow(false)} />
        </>
    );
});

Driver.propTypes = {

};

export default Driver;