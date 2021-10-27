import React from "react";
import "./App.css";
import { Typography, Button } from "@mui/material";
import ItemDiv from "./components/UI/ItemDiv";

function App() {
  return (
    <React.Fragment>
      <Typography variant="h2" gutterBottom>
        Hello World!
      </Typography>
      <Button variant="contained">Hello World</Button>
      <ItemDiv>Hello</ItemDiv>
    </React.Fragment>
  );
}

export default App;
