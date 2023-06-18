import React from 'react';
import {observer} from "mobx-react-lite";
import cn from "classnames";
import {Context} from "../../index";
import './style.m.scss';

let hideTimeout;

const ErrorMessage = observer(() => {
    const {main} = React.useContext(Context);
    const [message, setMessage] = React.useState(``);
    // const [style, setStyle] = React.useState({});
    //
    // React.useEffect(() => {
    //     const updateStyle = () => setStyle( { top: window.scrollY + window.screen.height - 50 });
    //
    //     window.addEventListener(`scroll`, updateStyle);
    //
    //     return () => window.removeEventListener(`scroll`, updateStyle);
    // }, []);
    //
    // console.log(style)

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