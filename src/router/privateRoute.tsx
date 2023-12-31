import * as React from "react";

import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import type { RouteProps } from "react-router";
import { useNavigate } from "react-router-dom";

import { windowLocalStorage } from "@/helpers/window";

const PrivateRoute: React.FC<RouteProps> = ({ element }) => {
  const navigate = useNavigate();

  const logged = !!windowLocalStorage("get", "auth-token");
  return logged ? (
    (element as React.ReactElement)
  ) : (
    <Center minH="100vh">
      <VStack spacing="4">
        <Heading>Please sign in to continue. The user is not authenticated.</Heading>
        <Button
          colorScheme="primary"
          onClick={() =>
            navigate("/v1/login", {
              replace: true,
            })
          }
        >
          Go To Login
        </Button>
      </VStack>
    </Center>
  );
};

export default PrivateRoute;
