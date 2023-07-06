import * as React from "react";

import type { RouteObject } from "react-router";
import { Navigate, useRoutes } from "react-router-dom";

import WrapperRouteComponent from "./config";

const Home = React.lazy(() => import("@/pages/home"));
const Login = React.lazy(() => import("@/pages/login"));
const Register = React.lazy(() => import("@/pages/register"));
const NotFound = React.lazy(() => import("@/pages/not-found"));

const routeList: RouteObject[] = [
  {
    path: "",
    element: <Navigate to="v1" />,
  },
  {
    path: "/v1",
    children: [
      {
        path: "",
        element: <WrapperRouteComponent element={<Home />} titleId="Home" auth />,
      },
      {
        path: "login",
        element: <WrapperRouteComponent element={<Login />} titleId="Login" />,
      },
      {
        path: "register",
        element: <WrapperRouteComponent element={<Register />} titleId="Register" />,
      },
      {
        path: "*",
        element: <WrapperRouteComponent element={<NotFound />} titleId="Not Found" />,
      },
    ],
  },
];

const RenderRouter: React.FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
