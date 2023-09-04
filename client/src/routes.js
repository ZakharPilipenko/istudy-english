import {
  ADMIN_ROUTE,
  GAME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "./components/UI/utils/consts.js";
import Game from "./pages/Game";
import Auth from "./pages/Auth.jsx";
import { results } from "../src/data.js";
import Admin from "./pages/Admin.jsx";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
];
export const publicRoutes = [
  {
    path: GAME_ROUTE,
    element: <Game results={results} />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
];
