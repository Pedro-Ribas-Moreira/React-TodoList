import React from "react";
import { Stack, Box, Typography } from "@mui/material/";

const MainDiv = (props) => {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "background.paper",
        boxShadow: 4,
        borderRadius: 1,
        p: 4,
        width: "60vw",
        minHeight: "80vh",
      }}
    >
      <Typography variant="h3" color="initial" mb={2} align="center">
        Tasks
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {props.children}
      </Stack>
    </Box>
  );
};

export default MainDiv;
