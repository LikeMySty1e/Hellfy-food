import React from 'react';
import {observer} from "mobx-react-lite";
// import cn from "classnames";
import {Context} from "../../index";
import Container from "../../components/common/Container/Container";
import Button, { Color } from "../../components/common/buttons/Button";
import UserData from "./components/UserData";
import './style.m.scss';

const allowedFileTypes = [`image/jpeg`, `image/png`];
const hellthyFoodAvatarLocalStorageKey = `hellthyFoodAvatar`;

const Profile = observer(() => {
    const {main} = React.useContext(Context);
    const [source, setSource] = React.useState(localStorage.getItem(hellthyFoodAvatarLocalStorageKey) || `./images/fish.m.svg`);
    const inputFileRef = React.useRef();

    const onUpload = (file = {}) => {
        const src = window.URL.createObjectURL(file);

        localStorage.setItem(hellthyFoodAvatarLocalStorageKey, src);

        setSource(src);
    };

    const renderLeftPart = () => {
        return <section className="profile__section">
            <div className="user">
                <div className="user__info">
                    <div className="user__avatar--overlay" onClick={() => inputFileRef.current.click()}>
                        <img src={source} className="user__avatar" alt="Аватар" />
                    </div>
                    {/*<div className="user__data" style={{ width: `300px` }}>*/}
                    {/*    <div>E-mail: {main.userModel.email}</div>*/}
                    {/*</div>*/}
                    {/*<Button*/}
                    {/*    classname="user__button"*/}
                    {/*    color={Color.green}*/}
                    {/*>*/}
                    {/*    Изменить данные для входа*/}
                    {/*</Button>*/}
                    <Button
                        classname="user__button"
                        onClick={main.unauthorise}
                        color={Color.orange}
                    >
                        Выйти
                    </Button>
                </div>
            </div>
        </section>;
    };

    return <Container>
        <input
            ref={inputFileRef}
            accept={allowedFileTypes}
            style={{ display: `none` }}
            onChange={(e) => onUpload(e.target.files[0])}
            type="file"
        />

        <div className="profile__container">
            {renderLeftPart()}
            <UserData />
        </div>
    </Container>
});

export default Profile;
