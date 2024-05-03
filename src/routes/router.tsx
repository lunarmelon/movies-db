import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants";

import PrivateRouter from "./PrivateRouter";

import {
  Home,
  Popular,
  NowPlaying,
  Upcoming,
  TopRated,
  Show,
  Favorites,
} from "../pages";

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <PrivateRouter />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.POPULAR, element: <Popular /> },
      { path: ROUTES.NOW_PLAYING, element: <NowPlaying /> },
      { path: ROUTES.UPCOMING, element: <Upcoming /> },
      { path: ROUTES.TOP_RATED, element: <TopRated /> },
      { path: `${ROUTES.SHOW}:id`, element: <Show /> },
      { path: ROUTES.FAVORITES, element: <Favorites /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
