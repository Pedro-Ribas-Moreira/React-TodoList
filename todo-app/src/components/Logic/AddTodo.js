import { React, useState } from "react";
// import classes from "./AddTodo.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";
import AddBtn from "../UI/AddBtn";

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const [addState, setAddState] = useState(false);

  const showFormHandler = () => {
    setAddState(!addState);
  };
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
    setTimeout(() => {
      setAddState(!addState);
      console.log("change");
    }, 100);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "10%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {addState === true ? (
        <FormGroup
          sx={{
            bgcolor: "background.paper",
            boxShadow: 4,
            borderRadius: 1,
            p: 4,
            minHeight: 120,
            minWidth: 500,
            maxWidth: 800,
          }}
        >
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
      ) : (
        <AddBtn onClick={showFormHandler} />
      )}
    </Box>
  );
};

export default AddTodo;
