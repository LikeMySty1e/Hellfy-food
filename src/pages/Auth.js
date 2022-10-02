import React, {useContext, useState} from 'react';
import {Alert, Container, Form} from "react-bootstrap";
import {useLocation, useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {MAIN_ROUTE} from "../resources/consts";
import {login} from "../services/userDataService";
import {Context} from "../index";

const Auth = observer(() => {
    const {main} = useContext(Context);
    const history = useHistory();
    const [alert, setAlert] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginClick = async () => {
        try {
            const token = await login(email, password);
            main.setToken(token)
            main.setIsAuth(true);
            history.push(MAIN_ROUTE)
        } catch (e) {
            setAlert(e.response.data.message)
        }
    }

    if (alert) {
        return <Alert variant="danger" onClick={() => setAlert('')} onClose={() => setAlert('')} dismissible>
            <Alert.Heading>Во время авторизации произошла ошибка!</Alert.Heading>
            <p>{alert}</p>
        </Alert>
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Button
                            variant={"outline-primary"}
                            onClick={onLoginClick}
                        >
                            Войти
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
