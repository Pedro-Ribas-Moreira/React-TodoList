import React from "react";
import { Stack, Grid, Typography } from "@mui/material/";
import { styled } from "@mui/material/styles";
import TypeItem from "../UI/TypeItem";

const CustomGrid = styled(Grid)(({ theme }) => ({
  height: "100%",
  background: theme.palette.background.paper,
  padding: "5%",
}));

const MainDiv = (props) => {
  return (
    <Grid
      container
      spacing={0.5}
      sx={{
        width: "90vw",
        minHeight: "90vh",
      }}
    >
      <Grid item xs={4}>
        <CustomGrid
          sx={{
            borderTopLeftRadius: "5%",
            borderBottomLeftRadius: "5%",
            boxShadow: 4,
          }}
        >
          <Grid
            item
            md={2}
            sx={{
              border: "1px solid red",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              color="initial"
              sx={{ fontWeight: "bold", paddingLeft: "4%" }}
            >
              .taskCo
            </Typography>
          </Grid>
          <Grid item md={8} sx={{ border: "1px solid blue" }}>
            <Stack direction="column" alignItems="center" spacing={1}>
              <TypeItem icon="HomeIcon"> All Tasks</TypeItem>
              <TypeItem icon="FlagIcon">Priority</TypeItem>
              <TypeItem icon="AccessTimeFilledIcon"> Waiting</TypeItem>
              <TypeItem icon="CheckCircleIcon">Completed</TypeItem>
            </Stack>
          </Grid>
        </CustomGrid>
      </Grid>

      <Grid item xs={8}>
        <CustomGrid
          sx={{
            borderTopRightRadius: "5%",
            borderBottomRightRadius: "5%",
            boxShadow: 4,
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            {props.children}
          </Stack>
        </CustomGrid>
      </Grid>
    </Grid>
  );
};

export default MainDiv;
