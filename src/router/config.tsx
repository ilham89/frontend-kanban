import * as React from "react";

import type { RouteProps } from "react-router";

import PrivateRoute from "./privateRoute";

type WrapperRouteProps = RouteProps & {
  titleId: string;
  auth?: boolean;
};

const WrapperRouteComponent: React.FC<WrapperRouteProps> = ({
  titleId = "Kanban App",
  auth,
  ...props
}) => {
  if (titleId) {
    document.title = titleId;
  }

  return auth ? <PrivateRoute {...props} /> : (props.element as React.ReactElement);
};

export default WrapperRouteComponent;
