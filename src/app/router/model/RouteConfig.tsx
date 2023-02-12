import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages';
import { AppRoutes } from './AppRoutes';
import { RoutePath } from './RoutePath';

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    main: {
        path: RoutePath.main,
        element: <MainPage />
    },
    about: {
        path: RoutePath.about,
        element: <AboutPage />
    }
};