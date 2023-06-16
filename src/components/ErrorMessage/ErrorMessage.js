import React from 'react';
import {observer} from "mobx-react-lite";
import cn from "classnames";
import {Context} from "../../index";
import './style.m.scss';

let hideTimeout;

const ErrorMessage = observer(() => {
    const {main} = React.useContext(Context);
    const [message, setMessage] = React.useState(``);

    React.useEffect(() => {
        clearTimeout(hideTimeout);

        if (main.error) {
            setMessage(main.error);
        } else {
            hideTimeout = setTimeout(() => setMessage(``), 400);
        }
    }, [main.error]);

    const onErrorClick = () => {
        main.showError(``);
    };

    return <div onClick={onErrorClick} className={cn("my__error__bubble", { "my__error__bubble--showed": !!main.error })}>
        {message}
    </div>;
});

export default ErrorMessage;