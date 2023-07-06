import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
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
} from "@chakra-ui/react";
import { Droppable } from "react-beautiful-dnd";

import { ITodo } from "./todo.types";
import { useAction } from "./useAction";
import { AddIcon } from "../icons";
import Item from "../item";
import { generateHexToText, generateRandomColorPair } from "@/helpers/color";

const Todo = ({ id, title, description, items, todos }: ITodo) => {
  const { isOpen, onOpen, onClose, isLoading, formik } = useAction(id);

  const { primaryColor, secondaryColor, fontColor } = generateRandomColorPair();

  return (
    <Box
      border="1px solid"
      borderColor={primaryColor}
      borderRadius="base"
      p="4"
      bg={secondaryColor}
      h="fit-content"
    >
      <VStack spacing="3" align="flex-start">
        <Tag
          variant="outline"
          color={fontColor}
          colorScheme={generateHexToText(primaryColor)}
          bg={secondaryColor}
        >
          {title}
        </Tag>
        <Text fontWeight="bold" fontSize="xs" color="#404040">
          {description}
        </Text>
        <Droppable key={id} droppableId={id.toString()}>
          {(provided) => (
            <VStack
              spacing="3"
              align="flex-start"
              width="full"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items?.map((item, index) => (
                <Item key={item.id} item={item} todos={todos} index={index} />
              ))}
              {provided.placeholder}
            </VStack>
          )}
        </Droppable>
        {items.length === 0 && (
          <Box
            py="2"
            px="4"
            border="1px solid #E0E0E0"
            bg="#FAFAFA"
            borderRadius="base"
            width="full"
          >
            <Text fontWeight="normal" fontSize="sm" color="#757575">
              No Task
            </Text>
          </Box>
        )}
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
          <form onSubmit={formik.handleSubmit}>
            <ModalBody>
              <VStack spacing="4" align="start">
                <FormControl isInvalid={!!formik.errors.name}>
                  <FormLabel>Task Name</FormLabel>
                  <Input
                    name="name"
                    placeholder="Type your Task"
                    focusBorderColor="primary.500"
                    borderRadius="lg"
                    border="2px solid"
                    borderColor="#E0E0E0"
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.progress_percentage}>
                  <FormLabel>Progress</FormLabel>
                  <InputGroup>
                    <Input
                      name="progress_percentage"
                      placeholder="70"
                      focusBorderColor="primary.500"
                      borderRadius="lg"
                      border="2px solid"
                      borderColor="#E0E0E0"
                      type="number"
                      w="25"
                      onChange={formik.handleChange}
                    />
                    <InputRightAddon>%</InputRightAddon>
                  </InputGroup>
                  <FormErrorMessage>{formik.errors.progress_percentage}</FormErrorMessage>
                </FormControl>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="primary"
                type="submit"
                loadingText="Loading..."
                isLoading={isLoading}
              >
                Save Task
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Todo;
