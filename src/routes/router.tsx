import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./constants";

import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

import { Home, Popular } from "../pages";

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <PrivateRouter />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.POPULAR, element: <Popular /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
