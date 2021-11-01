import React, { useState } from "react";
import { Checkbox, Typography, Stack, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

// expand div

import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  // textAlign: "center",
  width: "80%",
  // display: "flex",
  borderRadius: "20px",
  elevation: 14,
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

const BoxItem = styled(Box)(({ theme }) => ({
  // padding: theme.spacing(2),
  // textAlign: "center",
  width: "100%",
  display: "flex",
  // borderRadius: "20px",
  justifyContent: "space-between",
  alignItems: "center",
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  marginLeft: "5%",
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ItemDiv = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const checkChangeHandler = (e) => {
    props.onCheck(props.id);
  };
  const deleteItemHandler = (id) => {
    props.deleteItem(id);
  };

  return (
    <Item key={props.id}>
      <Stack direction="column">
        <BoxItem>
          <Checkbox
            ml={4}
            checked={props.isChecked}
            onChange={checkChangeHandler}
          />
          {props.isChecked === true ? (
            <ItemTitle
              variant="h6"
              sx={{ textDecoration: "line-through", color: "#D3D3D3" }}
            >
              {props.title}
            </ItemTitle>
          ) : (
            <ItemTitle variant="h6">{props.title}</ItemTitle>
          )}
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
            aria-label="delete"
            onClick={() => {
              deleteItemHandler(props.id);
            }}
            sx={{
              "&:hover ": {
                color: "error.main",
              },
            }}
          >
            <DeleteIcon sx={{ padding: "10px" }} />
          </IconButton>
        </BoxItem>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ padding: 6, paddingTop: 2 }}>
            <Typography paragraph>{props.text}</Typography>
          </Box>
        </Collapse>
      </Stack>
    </Item>
  );
};

export default ItemDiv;
