import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import VideoRow from "./VideoRow";
import TableTabEnum from "../../../enums/TableTabEnum";
import {Context} from "../../../index";
import VideoAddModal from "./VideoAddModal";
import tableTabEnum from "../../../enums/TableTabEnum";

const Video = observer(() => {
    const {main} = useContext(Context);
    const [isShow, setIsShow] = React.useState(false);

    React.useEffect(() => {
        if (main.activeTab === tableTabEnum.Video) {
            main.setTable(`select_video_datas`);
        }
    }, [main.activeTab]);

    const getRows = () => {
        return main.table.map((row, index) => <VideoRow key={`video_${row.video_id}`} data={{
            index: index + 1,
            id: row.video_id,
            date: row.video_date,
            time: row.video_time,
            victimCarNumber: row.victims_car_number,
            violatorCarNumber: row.violators_car_number
        }} />);
    };

    if (main.isLoading || main.isTableEmpty || main.activeTab !== tableTabEnum.Video) {
        return <Container>
            Загрузка данных...
        </Container>
    }

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
                    {getRows()}
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