import {AUTH_ROUTE, MAIN_ROUTE, PROFILE_ROUTE} from "./resources/consts";
import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main";
import Profile from "./pages/Profile/Profile";

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
        path: PROFILE_ROUTE,
        Component: Profile
    }
]
