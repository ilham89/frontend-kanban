import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { useAction } from "./useAction";

const Header = () => {
  const { isOpen, onOpen, onClose, formik, isLoading } = useAction();

  return (
    <Box p="6" borderBottom="1px solid #E0E0E0">
      <HStack spacing="10px">
        <Heading fontSize="lg" fontWeight="bold" color="text.500">
          Product Roadmap
        </Heading>
        <Button
          colorScheme="primary"
          fontSize="sm"
          fontWeight="bold"
          borderRadius="lg"
          px="4"
          py="1"
          leftIcon={<SmallAddIcon fontSize="2xl" />}
          onClick={onOpen}
        >
          Add New Group
        </Button>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Group</ModalHeader>
          <form onSubmit={formik.handleSubmit}>
            <ModalBody>
              <VStack spacing="4" align="start">
                <FormControl isInvalid={!!formik.errors.title}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    name="title"
                    placeholder="Title"
                    focusBorderColor="primary.500"
                    borderRadius="lg"
                    border="2px solid"
                    borderColor="#E0E0E0"
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.description}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    name="description"
                    placeholder="Description"
                    focusBorderColor="primary.500"
                    borderRadius="lg"
                    border="2px solid"
                    borderColor="#E0E0E0"
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
                </FormControl>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="primary"
                type="submit"
                loadingText="Loading..."
                isLoading={isLoading}
              >
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
