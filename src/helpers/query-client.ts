import { QueryClient } from "@tanstack/react-query";

import { oneMinutesToMs } from "./time";

export const queryClient = new QueryClient({
  defaultOptions: {
    // your config global
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 5 * oneMinutesToMs,
    },
  },
});
