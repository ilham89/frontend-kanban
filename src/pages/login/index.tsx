import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useAction } from "./useAction";

const Login = () => {
  const { handleClick, formik, isLoading, show } = useAction();
  return (
    <Center minH="100vh">
      <Card>
        <CardHeader>
          <Text fontSize="lg" fontWeight="extrabold" textAlign="center">
            Kanban App
          </Text>
        </CardHeader>
        <CardBody>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing="4" align="start">
              <FormControl isInvalid={!!formik.errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  focusBorderColor="primary.500"
                  borderRadius="lg"
                  border="2px solid"
                  borderColor="#E0E0E0"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.password}>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    onChange={formik.handleChange}
                    focusBorderColor="primary.500"
                    borderRadius="lg"
                    border="2px solid"
                    borderColor="#E0E0E0"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <Button
                mt={4}
                colorScheme="primary"
                loadingText="Submitting ..."
                isLoading={isLoading}
                type="submit"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </CardBody>
      </Card>
    </Center>
  );
};

export default Login;
