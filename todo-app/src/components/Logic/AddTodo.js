import { React, useRef, useState } from "react";
import classes from "./AddTodo.module.css";
const AddTodo = (props) => {
  return (
    <div className={classes.add__todo__div}>
      <form className={classes.groupForm}>
        <input placeholder="Write a new To Do!" />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default AddTodo;
