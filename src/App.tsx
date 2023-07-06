import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";

import RenderRouter from "./router";
import { theme } from "./themes";
import Spinner from "@/components/spinner";
import { queryClient } from "@/helpers/query-client";

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider
          theme={theme}
          toastOptions={{ defaultOptions: { position: "top-right", duration: 2000 } }}
        >
          <React.Suspense fallback={<Spinner />}>
            <RenderRouter />
          </React.Suspense>
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
