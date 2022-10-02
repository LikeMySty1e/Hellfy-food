import {AUTH_ROUTE, MAIN_ROUTE, REPORTS_ROUTE} from "./resources/consts";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import Reports from "./pages/Reports";

export const unauthorisedRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    }
]

export const authorisedRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: REPORTS_ROUTE,
        Component: Reports
    }
]
