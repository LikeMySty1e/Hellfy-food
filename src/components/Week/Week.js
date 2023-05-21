import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import cn from 'classnames';
import PropTypes from 'prop-types';
import DaysEnum from "../../enums/DaysEnum";
import {Context} from "../../index";
import './style.css';

const Week = observer(() => {
    const {main} = useContext(Context);

    const setDay = e => main.setDay(e.target.id);

    return <div className="week">
            {Object.values(DaysEnum).map(day => <div
                onClick={setDay}
                className={cn("day", { ["day__active"]: main.day === day })}
                key={day}
                id={day}
            >
                {day}
            </div>)}
        </div>;
});

Week.propTypes = {

};

export default Week;