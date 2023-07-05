import { useToast } from "@chakra-ui/react";

const useNotification = () => {
  const toast = useToast();
  const addError = (label?: string) =>
    toast({
      title: label || "Something went wrong",
      isClosable: true,
      status: "error",
    });

  const addSuccess = (label?: string) =>
    toast({
      title: label || "Success!",
      isClosable: true,
      status: "success",
    });

  return { addError, addSuccess };
};

export default useNotification;
