import Main from "./pages/main";
import KeysMain from "./pages/keys";
import MainServices from "./pages/services";
export const publicRoutes = [
    {
        path: '/main',
        Component: Main
    },
    {
        path: '/keys',
        Component: KeysMain
    },
    {
        path: '/services',
        Component: MainServices
    }
];
