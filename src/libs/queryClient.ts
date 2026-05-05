import { QueryClient } from "@tanstack/react-query";
import { z } from "zod";

const handleErrors = (error: Error) => {
  if (error instanceof z.ZodError) {
    console.log(error);
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
      throwOnError: (error) => {
        handleErrors(error);
        return false;
      },
    },
  },
});

export default queryClient;
