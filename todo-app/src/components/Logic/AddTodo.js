import { React, useState } from "react";
// import classes from "./AddTodo.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";
import AddBtn from "../UI/AddBtn";
import { Typography } from "@material-ui/core";

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [addState, setAddState] = useState(false);

  const showFormHandler = () => {
    setAddState(!addState);
  };
  const changeValueHandler = (event) => {
    setNewTodo(event.target.value);
  };
  const changeDescriptionHandler = (event) => {
    setNewDescription(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    const titleText = newTodo;
    const descText = newDescription;

    if (titleText.trim().length === 0 || descText.trim().length === 0) {
      return;
    }
    props.onNewItem({
      title: titleText,
      text: descText,
      key: new Date().getTime(),
    });
    setNewTodo("");
    setNewDescription("");
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
          <Typography variant="h5" gutterBottom>
            Add a new task:
          </Typography>
          <TextField
            placeholder="Task title:"
            label="Task title:"
            fullWidth
            onChange={changeValueHandler}
            value={newTodo}
            margin="dense"
          />
          <TextField
            placeholder="Task description"
            label="Task description"
            multiline
            rows={4}
            fullWidth
            sx={{ marginBottom: 2, marginTop: 2 }}
            value={newDescription}
            onChange={changeDescriptionHandler}
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
