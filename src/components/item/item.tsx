import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import Hover from "../hover";
import { DeleteIcon, DoneIcon, SettingIcon, UpdateIcon, WarningIcon } from "../icons";
import Progress from "../progress";
import { useMutationDeleteItem, useMutationUpdateItem } from "@/services/items/items.function";
import { IItem } from "@/services/items/items.types";
import { ITodo } from "@/services/todos/todos.types";

const Item = ({ item, todos }: { item: IItem; todos: ITodo[] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isLoading } = useMutationDeleteItem();
  const { mutate: updateMoveItem } = useMutationUpdateItem();

  const confirmDelete = () => {
    const params = {
      todoId: item.todo_id,
      id: item.id,
    };
    mutate(params, {
      onSuccess: () => onClose(),
    });
  };

  const actions = [
    {
      name: "Move Right",
      icon: <ArrowForwardIcon />,
      hover: <ArrowForwardIcon color="primary.500" />,
    },
    {
      name: "Move Left",
      icon: <ArrowBackIcon />,
      hover: <ArrowBackIcon color="primary.500" />,
    },
    {
      name: "Edit",
      icon: <UpdateIcon />,
      hover: <UpdateIcon color="primary.500" />,
    },
    {
      name: "Delete",
      icon: <DeleteIcon />,
      hover: <DeleteIcon color="#E11428" />,
    },
  ] as const;

  const currentTodoPosition = todos.findIndex((todo) => todo.id === item.todo_id);

  const moveItem = (position: "left" | "right") => {
    const params = {
      todoId: item.todo_id,
      id: item.id,
      item: {
        target_todo_id:
          todos[position === "left" ? currentTodoPosition - 1 : currentTodoPosition + 1].id,
      },
    };

    updateMoveItem(params);
  };

  return (
    <Box p="4" border="1px solid #E0E0E0" bg="#FAFAFA" borderRadius="base" width="full">
      <VStack align="flex-start" divider={<Divider variant="dashed" color="#E0E0E0" />}>
        <Text fontWeight="bold" color="#404040" fontSize="sm">
          {item.name}
        </Text>
        <HStack spacing="3" width="full">
          <Progress completed={item.progress_percentage ?? 0} />
          {item.progress_percentage === 100 ? (
            <DoneIcon />
          ) : (
            <Text w="20" fontSize="xs" fontWeight="normal" color="#757575">
              {item.progress_percentage ?? 0} %
            </Text>
          )}
          <Popover>
            <PopoverTrigger>
              <IconButton aria-label="Add to friends" bg="transparent" icon={<SettingIcon />} />
            </PopoverTrigger>
            <PopoverContent w="320px" boxShadow="0px 4px 4px 0px #00000014">
              <PopoverArrow />
              <Box p="4">
                <Stack spacing="5">
                  {actions.map((action) => (
                    <Hover
                      key={action.name}
                      active={
                        <HStack
                          spacing="2.5"
                          cursor="pointer"
                          {...(action.name === "Delete" && {
                            onClick: onOpen,
                          })}
                          {...(action.name === "Move Left" && {
                            onClick: () => moveItem("left"),
                          })}
                          {...(action.name === "Move Right" && {
                            onClick: () => moveItem("right"),
                          })}
                        >
                          {action.hover}
                          <Text
                            fontWeight="semibold"
                            fontSize="md"
                            color={action.name === "Delete" ? "#E11428" : "primary.500"}
                          >
                            {action.name}
                          </Text>
                        </HStack>
                      }
                      not={
                        <HStack spacing="2.5" cursor="pointer">
                          <Box>{action.icon}</Box>
                          <Text fontWeight="semibold" fontSize="md" color="#333333">
                            {action.name}
                          </Text>
                        </HStack>
                      }
                    />
                  ))}
                </Stack>
              </Box>
            </PopoverContent>
          </Popover>
        </HStack>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack spacing="2">
              <WarningIcon />
              <Text color="#1D1F20" fontWeight="bold" fontSize="lg">
                Delete Task
              </Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="normal" fontSize="sm" color="#404040">
              Are you sure want to delete this task? your action can’t be reverted.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={confirmDelete}
              loadingText="Loading..."
              isLoading={isLoading}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Item;
