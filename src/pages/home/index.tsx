import { Box, Grid } from "@chakra-ui/react";

import { useAction } from "./useAction";
import Header from "@/components/header";
import Spinner from "@/components/spinner";
import Todo from "@/components/todo";

const Home = () => {
  const { todos, isLoading, todoItemsQueries } = useAction();

  if (isLoading) return <Spinner />;

  return (
    <Box>
      <Header />
      <Box p={6}>
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          justifyContent="center"
          gap="4"
        >
          {todos?.map((todo, index) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              items={todoItemsQueries[index].data || []}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
