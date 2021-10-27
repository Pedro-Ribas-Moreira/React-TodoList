import React from "react";
import { Container, Stack } from "@mui/material/";
import classes from "./MainDiv.module.css";

const MainDiv = (props) => {
  return (
    <Container
      className={classes.main__div}
      maxWidth="sm"
      sx={{ boxShadow: 2, bgcolor: "papper.main", height: "100vh", pt: 2 }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {props.children}
      </Stack>
    </Container>
  );
};

export default MainDiv;
