import React from "react";
import "./App.css";
import ItemDiv from "./components/UI/ItemDiv";
import MainDiv from "./components/UI/MainDiv";
import AddTodo from "./components/Logic/AddTodo";
function App() {
  return (
    <React.Fragment>
      <AddTodo />

      <MainDiv>
        <ItemDiv>Hello World</ItemDiv>
        <ItemDiv>Hello World</ItemDiv>
        <ItemDiv>Hello World</ItemDiv>
      </MainDiv>
    </React.Fragment>
  );
}

export default App;
