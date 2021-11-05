import React, { useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { mainListItems, secondaryListItems } from "./listItems";

import AddTodo from "../Logic/AddTodo";
import ItemDiv from "../UI/ItemDiv";
// import Chart from "./Chart";
// import Deposits from "./Deposits";
// import Orders from "./Orders";

import UpperSideBar from "./UpperSideBar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.linkedin.com/in/pedroh-moreira/">
        Pedro Moreira - Web Developer
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      setCurrentItems([]);
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
      todos.sort(function (a, b) {
        if (a.key < b.key) {
          return 1;
        }
        return 0;
      });

      setCurrentItems(todos);
    }
  }, []);

  const addItemHandler = (item) => {
    setCurrentItems((oldItems) => {
      return [...oldItems, item];
    });

    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoItem = {
      check: false,
      priority: false,
      archive: false,
      waiting: false,
      title: item.title,
      text: item.text,
      key: item.key,
    };
    todos.push(todoItem);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const removeUserHandler = (id) => {
    const newList = currentItems.filter((item) => item.key !== id);
    setCurrentItems(newList);

    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoKey = id;
    todos.forEach(function (todo) {
      if (todo.key === todoKey) {
        todos.splice(todos.indexOf(todo), 1);
      }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
  };
  // -------------------------------------------

  const onCheckHandler = (id) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const key = id;
    todos.forEach(function (todo) {
      if (todo.key === key) {
        todo.check = !todo.check;
      }
    });
    localStorage.setItem("todos", JSON.stringify(todos));

    setCurrentItems(todos);
  };

  const onPriorityHandler = (id) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const key = id;
    todos.forEach(function (todo) {
      if (todo.key === key) {
        todo.priority = !todo.priority;
      }
    });
    localStorage.setItem("todos", JSON.stringify(todos));

    setCurrentItems(todos);
  };

  const onArchiveHandler = (id) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const key = id;
    todos.forEach(function (todo) {
      if (todo.key === key) {
        todo.archive = !todo.archive;
      }
    });
    localStorage.setItem("todos", JSON.stringify(todos));

    setCurrentItems(todos);
  };

  const waitingItemHandler = (id) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const key = id;
    todos.forEach(function (todo) {
      if (todo.key === key) {
        todo.waiting = !todo.waiting;
      }
    });
    localStorage.setItem("todos", JSON.stringify(todos));

    setCurrentItems(todos);
  };
  // --------------------------------------

  const list = currentItems.map((e) => {
    return (
      <ItemDiv
        key={e.key}
        waitingItem={waitingItemHandler}
        deleteItem={removeUserHandler}
        priorityItem={onPriorityHandler}
        archiveItem={onArchiveHandler}
        id={e.key}
        title={e.title}
        text={e.text}
        isChecked={e.check}
        isPriority={e.priority}
        isArchived={e.archive}
        isWaiting={e.waiting}
        onCheck={onCheckHandler}
      />
    );
  });

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Task Manager
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <UpperSideBar list={currentItems} />
          </List>
          <Divider />
          <List sx={{ marginTop: "auto", marginBottom: "10%" }}>
            {secondaryListItems}
          </List>
        </Drawer>
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {list}
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <AddTodo onNewItem={addItemHandler} />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
