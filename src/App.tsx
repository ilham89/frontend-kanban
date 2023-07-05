import * as React from "react";

import { Center, ChakraProvider, Spinner, extendTheme } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";

import RenderRouter from "./router";
import { queryClient } from "@/helpers/query-client";

const App = () => {
  const theme = extendTheme({
    colors: {
      primary: {
        500: "#01959F",
      },
      text: {
        500: "#1E1F21",
      },
      border: {
        500: "#4DB5BC",
      },
      surface: {
        500: "#F7FEFF",
      },
      success: {
        500: "#43936C",
      },
    },
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider
          theme={theme}
          toastOptions={{ defaultOptions: { position: "top-right", duration: 2000 } }}
        >
          <React.Suspense
            fallback={
              <Center minH="100vh">
                <Spinner
                  thickness="8px"
                  speed="0.9s"
                  emptyColor="gray.200"
                  color="primary.500"
                  size="xl"
                />
              </Center>
            }
          >
            <RenderRouter />
          </React.Suspense>
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
