import { Box, Grid } from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";

import { useAction } from "./useAction";
import Header from "@/components/header";
import Spinner from "@/components/spinner";
import Todo from "@/components/todo";

const Home = () => {
  const { todos, isLoading, todoItemsQueries, moveItemDraggable } = useAction();

  if (isLoading) return <Spinner />;

  return (
    <Box>
      <Header />
      <Box p={6}>
        <DragDropContext
          onDragEnd={(result, provided) => {
            console.log(result, provided, "ini apa");

            moveItemDraggable(result);
          }}
        >
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
                todos={todos}
              />
            ))}
          </Grid>
        </DragDropContext>
      </Box>
    </Box>
  );
};

export default Home;
