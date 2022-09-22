import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {authorisedRoutes, unauthorisedRoutes} from "../routes";
import {MAIN_ROUTE} from "../resources/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {main} = useContext(Context);
    const isAuth = true;

    return (
        <Switch>
            {isAuth && authorisedRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {unauthorisedRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={MAIN_ROUTE} exact/>
        </Switch>
    );
};

export default AppRouter;