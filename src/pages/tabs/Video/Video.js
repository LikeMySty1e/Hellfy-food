import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import VideoRow from "./VideoRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import VideoAddModal from "./VideoAddModal";

const Video = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false)

    return (
        <>
            <Container>
                <Button
                    id={TableTabEnum.Video}
                    className="mb-3"
                    size="sm"
                    variant="outline-primary"
                    style={{ width: `100%` }}
                    onClick={() => setIsShow(true)}
                >
                    + Видеозапись
                </Button>
            </Container>
            <Container style={{ maxHeight: 500, overflowY: `auto` }}>
                <Table striped responsive hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Дата</th>
                        <th>Время</th>
                        <th>Номер машины потерпевшего</th>
                        <th>Номер машины виновника</th>
                    </tr>
                    </thead>
                    <tbody>
                    <VideoRow data={{
                        index: 1,
                        id: 1,
                        date: `12.04.2002`,
                        time: `13:42`,
                        victimCarNumber: `А223РО58`,
                        violatorCarNumber: `А007АА177`
                    }} />
                    <VideoRow data={{
                        index: 1,
                        id: 1,
                        date: `12.04.2002`,
                        time: `13:42`,
                        victimCarNumber: `А223РО58`,
                        violatorCarNumber: `А007АА177`
                    }} />
                    <VideoRow data={{
                        index: 1,
                        id: 1,
                        date: `12.04.2002`,
                        time: `13:42`,
                        victimCarNumber: `А223РО58`,
                        violatorCarNumber: `А007АА177`
                    }} />
                    </tbody>
                </Table>
            </Container>

            <VideoAddModal isShow={isShow} handleClose={() => setIsShow(false)} />
        </>
    );
});

Video.propTypes = {

};

export default Video;