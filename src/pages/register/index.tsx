import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useAction } from "./useAction";

const Register = () => {
  const { handleClick, formik, isLoading, show, navigate } = useAction();
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
              <FormControl isInvalid={!!formik.errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  focusBorderColor="primary.500"
                  borderRadius="lg"
                  border="2px solid"
                  borderColor="#E0E0E0"
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
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
              <FormControl isInvalid={!!formik.errors.password_confirmation}>
                <FormLabel>Password Confirmation</FormLabel>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  name="password_confirmation"
                  onChange={formik.handleChange}
                  focusBorderColor="primary.500"
                  borderRadius="lg"
                  border="2px solid"
                  borderColor="#E0E0E0"
                />
                <FormErrorMessage>{formik.errors.password_confirmation}</FormErrorMessage>
              </FormControl>
              <HStack spacing="2" mt={4} justifyContent="flex-end" w="100%">
                <Button
                  colorScheme="primary"
                  variant="outline"
                  onClick={() => navigate("/v1/login")}
                >
                  Back Login
                </Button>
                <Button
                  colorScheme="primary"
                  loadingText="Submitting ..."
                  isLoading={isLoading}
                  type="submit"
                >
                  Submit
                </Button>
              </HStack>
            </VStack>
          </form>
        </CardBody>
      </Card>
    </Center>
  );
};

export default Register;
