import React, { useState } from "react";
//IMPORT MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";

//IMPORT COMPONENTS
// import AddTodo from "./TodoList/TodoItems/TodoAdd/AddTodo";
// import ItemDiv from "./TodoList/TodoItems/ItemDiv";
import Copyright from "./Copyright/Copyright";
import Headers from "./Headers/Headers";
import TodoList from "./TodoList/TodoList";

const mdTheme = createTheme();

const DashboardContent = () => {
  const [currentList, setCurrentList] = useState([]);

  const currentListHandler = (list) => {
    setCurrentList(list);
  };

  const [filterTag, setFilterTag] = useState("all");
  const filterListHandler = (arg) => {
    setFilterTag(arg);
  };

  const listTask = currentList.filter((e) => {
    if (filterTag === "all" && e.check === false) {
      return e;
    } else if (e[filterTag]) {
      return e;
    }
    return console.log("");
  });

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Headers onFilterList={filterListHandler} todoList={currentList} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <TodoList
                listTodos={listTask}
                onListHandler={currentListHandler}
              />
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default function Dashboard() {
  return <DashboardContent />;
}
