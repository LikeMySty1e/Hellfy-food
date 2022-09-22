import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import VideoRow from "./VideoRow";

const Video = observer(() => {
    return (
        <Container>
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
    );
});

Video.propTypes = {

};

export default Video;