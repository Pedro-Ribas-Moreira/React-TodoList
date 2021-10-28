import React from "react";
import { Checkbox, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
  const checkChangeHandler = (e) => {
    props.onCheck(props.id);
  };
  const deleteItemHandler = (id) => {
    props.deleteItem(id);
  };

  return (
    <Item key={props.id}>
      <Checkbox
        ml={4}
        checked={props.isChecked}
        onChange={checkChangeHandler}
      />
      <Typography sx={{ width: "100%", textAlign: "left" }}>
        {props.children}
      </Typography>
      <DeleteIcon
        onClick={() => {
          deleteItemHandler(props.id);
        }}
        sx={{
          cursor: "pointer",
          "&:hover": {
            color: "error.main",
          },
        }}
      />
    </Item>
  );
};

export default ItemDiv;
