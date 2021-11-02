import React, { useState } from "react";
import { Checkbox, Typography, Stack, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import CustomIconBtn from "./CustomIconBtn";

// expand div

import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "80%",
  borderRadius: "20px",
  elevation: 14,
  background: "#F7FAF9",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

const BoxItem = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
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
  const priorityItemHandler = (id) => {
    props.priorityItem(id);
  };

  return (
    <Item key={props.id}>
      <Stack direction="column">
        <BoxItem>
          <Checkbox
            checked={props.isChecked}
            onChange={checkChangeHandler}
            sx={{ padding: "10px" }}
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
            <ExpandMoreIcon sx={{ padding: "10px" }} />
          </ExpandMore>

          {props.isPriority === true ? (
            <CustomIconBtn
              aria-label="priority"
              onClick={() => {
                priorityItemHandler(props.id);
              }}
              sx={{ color: "error.main" }}
            >
              flag
            </CustomIconBtn>
          ) : (
            <CustomIconBtn
              aria-label="priority"
              onClick={() => {
                priorityItemHandler(props.id);
              }}
            >
              flag
            </CustomIconBtn>
          )}

          <CustomIconBtn
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
            delete
          </CustomIconBtn>
        </BoxItem>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ padding: 2 }}>
            <Typography paragraph>{props.text}</Typography>
          </Box>
        </Collapse>
      </Stack>
    </Item>
  );
};

export default ItemDiv;
