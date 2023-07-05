import * as React from "react";

import { Center, ChakraProvider, Spinner, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import RenderRouter from "./router";

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
      <ChakraProvider theme={theme}>
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
    </BrowserRouter>
  );
};

export default App;
