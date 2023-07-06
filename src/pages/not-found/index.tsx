import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Center minH="100vh">
      <VStack spacing="4">
        <Heading>The requested page does not exist. Please check the URL.</Heading>
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

export default NotFound;
