import * as React from "react";

import type { RouteProps } from "react-router";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

const PrivateRoute: React.FC<RouteProps> = ({ element }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const logged = true;
  return logged ? (
    (element as React.ReactElement)
  ) : (
    <div className="box-wrapper">
      <div
        onClick={() =>
          navigate(`/login${"?from=" + encodeURIComponent(location.pathname)}`, {
            replace: true,
          })
        }
      >
        Go To Login
      </div>
      {/* <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button
            type="primary"
            onClick={() =>
              navigate(`/login${"?from=" + encodeURIComponent(location.pathname)}`, {
                replace: true,
              })
            }
          >
            Go To Login
          </Button>
        }
      /> */}
    </div>
  );
};

export default PrivateRoute;
