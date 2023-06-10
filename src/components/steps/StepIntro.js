import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from "../common/Checkbox/Checkbox";
import {isNull} from "../../helpers/checkIsHelper";
import { ButtonDirection } from "../common/buttons/RoundButton";
import CommonStep from "./CommonStep";
import './style.m.scss';

const StepIntro = props => {
    const {
        updateData,
        isEdit,
        data = {},
    } = props;
    const {
        necessaryOnly,
        isEnthusiast,
        forPersonal
    } = data;

    const stepFilled = React.useMemo(() => !isNull(forPersonal), [forPersonal]);

    const changeComplex = value => {
        if (value === forPersonal) {
            updateData({ forPersonal: !value });
        } else {
            updateData({ forPersonal: value });
        }
    };

    return <CommonStep
        {...props}
        stepFilled={stepFilled}
        direction={ButtonDirection.bottomLeft}
        arrowDirection={ButtonDirection.bottomLeft}
    >
        <div className="orange__title">{isEdit ? `Дополнительная информация` : `Мастер регистрации`}</div>
        {!isEdit && <React.Fragment>
            Для успешного подбора программы правильного питания, нам потребуется узнать о вас некоторые детали. <br /> <br />
            Если вы не желаете нарушать таинство вашей социальной, личной и духовной жизни,
            отметьте галочкой пункт (однако, подбор питания в таком случае будет менее точен): <br />
            <Checkbox
                onChange={() => updateData({ necessaryOnly: !necessaryOnly })}
                value={!!necessaryOnly}
                classname="step__checkbox"
            >
                <span className="green">Только необходимая информация</span>
            </Checkbox> <br />
        </React.Fragment>}
        Вам нужен план питания для себя или вы тренер/диетолог?<br />
        {!isEdit && `Обязательный пункт`}
        <div className="step__row">
            <Checkbox
                onChange={() => changeComplex(true)}
                value={!isNull(forPersonal) && forPersonal}
                classname="step__checkbox"
            >
                <span className="green">Для себя</span>
            </Checkbox>
            <Checkbox
                onChange={() => changeComplex(false)}
                value={!isNull(forPersonal) && !forPersonal}
                classname="step__checkbox"
            >
                <span className="green">Я тренер/диетолог</span>
            </Checkbox>
        </div><br />
        Вы бы хотели расширить свой гастрономический кругозор? Отметьте галочкой, если согласны иногда получать блюда,
        отличающиеся от ваших обычных предпочтений.
        <Checkbox
            onChange={() => updateData({ isEnthusiast: !isEnthusiast })}
            value={!!isEnthusiast}
            classname="step__checkbox"
        >
            <span className="green">Я пищевой энтузиаст</span>
        </Checkbox> <br />
    </CommonStep>;
};

StepIntro.propTypes = {
    isEdit: PropTypes.bool,
    classname: PropTypes.string,
    isLast: PropTypes.bool,
    index: PropTypes.number,
    data: PropTypes.object,
    updateData: PropTypes.func.isRequired,
    hide: PropTypes.bool,
    pushStep: PropTypes.func
};

export default StepIntro;