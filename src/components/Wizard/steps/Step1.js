import React from 'react';
import cn from "classnames";
import PropTypes from 'prop-types';
import Checkbox from "../../common/Checkbox/Checkbox";
import StepsResource from "../resources/StepsResource";
import {isNull} from "../../../helpers/checkIsHelper";
import RoundButton, { ButtonDirection } from "../../common/buttons/RoundButton";
import './style.css';

const Step1 = props => {
    const {
        hide,
        updateData,
        data = {},
        pushStep
    } = props;
    const {
        necessaryOnly,
        isEnthusiast,
        forPersonal,
        currentStep
    } = data;

    const stepFilled = React.useMemo(() => !isNull(forPersonal), [forPersonal]);

    const changeComplex = value => {
        if (value === forPersonal) {
            updateData({ forPersonal: !value });
        } else {
            updateData({ forPersonal: value });
        }
    };

    const goNext = () => {
        if (currentStep > 0) {
            return;
        }

        updateData({ currentStep: 1 });
        pushStep(StepsResource[1]);
    };

    return <div key={`Step1`} className={cn(
        "step__card",
        "step__card--right",
        { ["step__card--hide"]: hide }
    )}>
        <div className="orange__title">Мастер регистрации</div>
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
        Вам нужен план питания для себя или вы тренер/диетолог?<br />
        (Обязательный пункт)
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
        <RoundButton
            active={currentStep > 0}
            onClick={goNext}
            disabled={!stepFilled}
            direction={ButtonDirection.bottomLeft}
        />
    </div>;
};

Step1.propTypes = {
    data: PropTypes.object,
    updateData: PropTypes.func.isRequired,
    hide: PropTypes.bool,
    pushStep: PropTypes.func
};

export default Step1;