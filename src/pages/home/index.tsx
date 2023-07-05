import { Box, Grid } from "@chakra-ui/react";

import Header from "@/components/header";
import Todo from "@/components/todo";

const Home = () => {
  return (
    <Box>
      <Header />
      <Box p={6}>
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          justifyContent="center"
          gap="4"
        >
          {[1, 2, 3, 4, 5].map((d) => (
            <Todo
              key={d}
              title="Group Task 1"
              description="January - March"
              items={[
                {
                  id: 1,
                  name: "Redesign page",
                  done: null,
                  todo_id: 1,
                  created_at: "2021-04-21T00:12:06.116Z",
                  updated_at: "2021-04-21T00:12:06.116Z",
                  progress_percentage: null,
                },
                {
                  id: 2,
                  name: "Redesign page part 2",
                  done: null,
                  todo_id: 1,
                  created_at: "2021-04-21T00:14:38.397Z",
                  updated_at: "2021-04-21T00:14:38.397Z",
                  progress_percentage: 60,
                },
              ]}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
