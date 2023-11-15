import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home/Home";
import Login from "../layouts/Login/Login";
import ErrorPage from "../layouts/ErrorPage/ErrorPage";
import LoginWithGoogle from "../layouts/Login/LoginWithGoogle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/oauth",
    element: <LoginWithGoogle />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
