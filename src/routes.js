import {AUTH_ROUTE, MAIN_ROUTE} from "./resources/consts";
import Auth from "./pages/Auth";
import Main from "./pages/Main";

export const authorisedRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    }
]

export const unauthorisedRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]
