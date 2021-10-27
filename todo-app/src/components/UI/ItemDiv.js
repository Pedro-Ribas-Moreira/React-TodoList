import React from "react";
import { Checkbox, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  width: "80%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

const ItemDiv = (props) => {
  return (
    <Item>
      <Checkbox />
      <Typography sx={{ width: "100%", textAlign: "left" }}>
        {props.children}
      </Typography>
      <HomeIcon />
    </Item>
  );
};

export default ItemDiv;
