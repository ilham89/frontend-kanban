import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <ModalBody>
            <Input
              placeholder="Basic usage"
              focusBorderColor="primary.500"
              borderRadius="lg"
              border="2px solid"
              borderColor="#E0E0E0"
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="primary">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
