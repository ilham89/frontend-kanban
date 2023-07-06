import { Center, Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Center minH="100vh">
      <ChakraSpinner
        thickness="8px"
        speed="0.9s"
        emptyColor="gray.200"
        color="primary.500"
        size="xl"
      />
    </Center>
  );
};

export default Spinner;
