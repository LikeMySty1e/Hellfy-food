import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import DriverRow from "./DriverRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import DriverAddModal from "./DriverAddModal";

const Driver = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false)

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
                    <DriverRow data={{
                        index: 1,
                        id: 1,
                        fullname: `Пол Ол Джонсон`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: true
                    }}/>
                    <DriverRow data={{
                        index: 2,
                        id: 2,
                        fullname: `ЫЫЫЫЫЫЫЫЫЫЫ`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: false
                    }}/>
                    <DriverRow data={{
                        index: 2,
                        id: 2,
                        fullname: `ЫЫЫЫЫЫЫЫЫЫЫ`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: false
                    }}/><DriverRow data={{
                        index: 1,
                        id: 1,
                        fullname: `Пол Ол Джонсон`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: true
                    }}/>
                    <DriverRow data={{
                        index: 2,
                        id: 2,
                        fullname: `ЫЫЫЫЫЫЫЫЫЫЫ`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: false
                    }}/><DriverRow data={{
                        index: 1,
                        id: 1,
                        fullname: `Пол Ол Джонсон`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: true
                    }}/>
                    <DriverRow data={{
                        index: 2,
                        id: 2,
                        fullname: `ЫЫЫЫЫЫЫЫЫЫЫ`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: false
                    }}/><DriverRow data={{
                        index: 1,
                        id: 1,
                        fullname: `Пол Ол Джонсон`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: true
                    }}/>
                    <DriverRow data={{
                        index: 2,
                        id: 2,
                        fullname: `ЫЫЫЫЫЫЫЫЫЫЫ`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: false
                    }}/>
                    <DriverRow data={{
                        index: 2,
                        id: 2,
                        fullname: `ЫЫЫЫЫЫЫЫЫЫЫ`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: false
                    }}/>
                    <DriverRow data={{
                        index: 2,
                        id: 2,
                        fullname: `ЫЫЫЫЫЫЫЫЫЫЫ`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: false
                    }}/>
                    <DriverRow data={{
                        index: 2,
                        id: 2,
                        fullname: `ЫЫЫЫЫЫЫЫЫЫЫ`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: false
                    }}/>
                    <DriverRow data={{
                        index: 2,
                        id: 2,
                        fullname: `ЫЫЫЫЫЫЫЫЫЫЫ`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: false
                    }}/>
                    <DriverRow data={{
                        index: 2,
                        id: 2,
                        fullname: `ЫЫЫЫЫЫЫЫЫЫЫ`,
                        birthday: `12.04.2002`,
                        license: `121322536457`,
                        criminal: false
                    }}/>
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