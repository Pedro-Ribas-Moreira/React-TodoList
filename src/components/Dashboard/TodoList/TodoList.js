import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ItemDiv from "./TodoItems/ItemDiv";
import AddTodo from "./TodoAdd/AddTodo";
import { useEffect } from "react";

const TodoList = (props) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [addTodo, setAddTodo] = useState(false);

  useEffect(() => {
    props.onListHandler(currentItems);
  }, [currentItems]);

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

  const addTodoHandler = () => {
    setAddTodo(true);
  };
  const addItemHandler = (item) => {
    const todoItem = {
      check: false,
      priority: false,
      archive: false,
      waiting: false,
      title: item.title,
      text: item.text,
      key: item.key,
    };
    setCurrentItems((oldItems) => {
      return [...oldItems, todoItem];
    });

    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todoItem);
    localStorage.setItem("todos", JSON.stringify(todos));
    setAddTodo(false);
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

  return (
    <Grid data-testid="todo__grid" item xs={11} md={11} lg={12}>
      <Paper
        data-testid="todos__div"
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "column",
          maxHeight: "80vh",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {props.listTodos.map((e, index) => {
          return (
            <ItemDiv
              key={index}
              task={e}
              waitingItem={waitingItemHandler}
              deleteItem={removeUserHandler}
              priorityItem={onPriorityHandler}
              archiveItem={onArchiveHandler}
              onCheck={onCheckHandler}
            />
          );
        })}
      </Paper>
      <Paper
        sx={{
          mt: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {addTodo ? (
          <AddTodo
            data-testid="addTodo__component"
            onNewItem={addItemHandler}
          />
        ) : (
          <Button onClick={addTodoHandler}>New Task</Button>
        )}
      </Paper>
    </Grid>
  );
};

export default TodoList;
