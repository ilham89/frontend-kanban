import {
  Box,
  Button,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { ITodo } from "./todo.types";
import { AddIcon } from "../icons";
import Item from "../item";

const Todo = ({ title, description, items }: ITodo) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box border="1px solid" borderColor="primary.500" borderRadius="base" p="4" bg="surface.500">
      <VStack spacing="3" align="flex-start">
        <Tag variant="outline" colorScheme="border" bg="surface.500">
          {title}
        </Tag>
        <Text fontWeight="bold" fontSize="xs" color="#404040">
          {description}
        </Text>
        {items?.map((item: any) => (
          <Item key={item.id} item={item} />
        ))}

        {items.length === 0 && <Heading>No Items Found</Heading>}
        <HStack cursor="pointer" spacing="1" onClick={onOpen}>
          <AddIcon />
          <Text color="#1D1F20" fontSize="xs" fontWeight="normal">
            New Task
          </Text>
        </HStack>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Ko </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="primary">Save Task</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Todo;
