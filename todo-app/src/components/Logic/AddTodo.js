import { React, useState } from "react";
// import classes from "./AddTodo.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = useState();

  const changeValueHandler = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    const inputText = newTodo;

    if (inputText.trim().length === 0) {
      return;
    }
    props.onNewItem({
      text: inputText,
      key: new Date().getTime(),
    });
    setNewTodo("");
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        bgcolor: "background.paper",
        boxShadow: 4,
        borderRadius: 1,
        p: 4,
        minHeight: 120,
        minWidth: 500,
        maxWidth: 800,
      }}
    >
      <FormGroup>
        <TextField
          placeholder="Write a new To Do!"
          onChange={changeValueHandler}
          value={newTodo}
          margin="dense"
        />
        <Button variant="contained" type="submit" onClick={addTodoHandler}>
          Add Item
        </Button>
      </FormGroup>
    </Box>
  );
};

export default AddTodo;
