import React from 'react';
import cn from "classnames";
import PropTypes from 'prop-types';
import Button, {Color} from "../../common/Button";
import Checkbox from "../../common/Checkbox/Checkbox";
import './style.css';

const Step1 = props => {
    const { hide } = props;

    return <div className={cn("step__card", { ["step__card--hide"]: hide })}>
        <div className="orange__title">Мастер регистрации</div>
        Для успешного подбора программы правильного питания, нам потребуется узнать о вас некоторые детали. <br /> <br />
        Если вы не желаете нарушать таинство вашей социальной, личной и духовной жизни,
        отметьте галочкой пункт: <br />
        <Checkbox classname="step__checkbox">
            <span className="green">Только неободимая информация</span>
        </Checkbox> <br />
    </div>;
};

Step1.propTypes = {
    
};

export default Step1;