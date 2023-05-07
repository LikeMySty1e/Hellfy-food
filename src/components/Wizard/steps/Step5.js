import React from 'react';
import cn from "classnames";
import PropTypes from 'prop-types';
import Button, {Color} from "../../common/buttons/Button";
import './style.css';

const Step5 = props => {
    const {
        hide,
        onComplete
    } = props;

    return <div key={`Step5`} className={cn(
        "step__card",
        "step__card--right",
        { ["step__card--hide"]: hide }
    )}>
        <div className="orange__title">Завершение регистрации</div>
        Поздравляем с завершением анкеты регистрации!<br /><br />
        Благодарим за то, что уделили время и заполнили все необходимые данные.
        Теперь мы можем начать работу над подбором индивидуального плана питания,
        который будет идеально подходить именно Вам.<br /><br />

        Этих данных хватит, чтобы мы смогли предложить персональные рекомендации по питанию,
        учитывая Ваши индивидуальные потребности и цели.<br /><br />
        Уверены, что наш сервис поможет Вам улучшить свое здоровье и достичь желаемых результатов.<br /><br />
        <Button
            onClick={() => onComplete()}
            color={Color.green}
        >
            Завершить
        </Button>
    </div>;
};

Step5.propTypes = {
    onComplete: PropTypes.func.isRequired,
    hide: PropTypes.bool
};

export default Step5;