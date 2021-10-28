import React, { useState, useEffect } from "react";
import "./App.css";
import ItemDiv from "./components/UI/ItemDiv";
import MainDiv from "./components/UI/MainDiv";
import AddTodo from "./components/Logic/AddTodo";

function App() {
  const [currentItems, setCurrentItems] = useState([]);

  const addItemHandler = (item) => {
    setCurrentItems((oldItems) => {
      return [item, ...oldItems];
    });
    console.log(currentItems);
  };

  const removeUserHandler = (id) => {
    const newList = currentItems.filter((item) => item.key !== id);
    console.log(newList);
    setCurrentItems(newList);
  };

  const list = currentItems.map((e) => {
    return (
      <ItemDiv deleteItem={removeUserHandler} id={e.key}>
        {e.text}
      </ItemDiv>
    );
  });
  return (
    <React.Fragment>
      <AddTodo onNewItem={addItemHandler} />
      <MainDiv>{list}</MainDiv>
    </React.Fragment>
  );
}

export default App;
