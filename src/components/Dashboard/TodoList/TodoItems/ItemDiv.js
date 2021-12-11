import React, { useState } from "react";

// import Material UI
import { Checkbox, Typography, Stack, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
//Import Components
import ExpandMoreBtn from "../../../UI/ExpandMoreBtn";

const WrappedIcon = (props) => (
  <Icon {...props} sx={{ ...props.sx }}>
    {" "}
    {props.children}{" "}
  </Icon>
);

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "100%",
  borderRadius: "5px",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 6,
  color: theme.palette.text.secondary,
}));

const BoxItem = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  variant: "h6",
  width: "100%",
  textAlign: "left",
  marginLeft: "5px",
}));

const ItemDiv = (props) => {
  const [expanded, setExpanded] = useState(false);
  const changeCollapseHandler = (bool) => {
    setExpanded(bool);
  };

  const checkChangeHandler = (id) => {
    props.onCheck(id);
  };
  const deleteItemHandler = (id) => {
    props.deleteItem(id);
  };
  const priorityItemHandler = (id) => {
    props.priorityItem(id);
  };

  const archiveItemHandler = (id) => {
    props.archiveItem(id);
  };

  const waitingItemHandler = (id) => {
    props.waitingItem(id);
  };

  return (
    <Item key={props.task.key}>
      <Stack direction="column">
        <BoxItem>
          <Checkbox
            checked={props.task.check}
            onChange={() => {
              checkChangeHandler(props.task.key);
            }}
          />
          {props.task.check === true ? (
            <ItemTitle
              sx={{
                textDecoration: "line-through",
                color: "#D3D3D3",
              }}
            >
              {props.task.title}
            </ItemTitle>
          ) : (
            <ItemTitle>{props.task.title}</ItemTitle>
          )}

          <ExpandMoreBtn onChange={changeCollapseHandler} />
          <IconButton
            aria-label="priority"
            onClick={() => {
              priorityItemHandler(props.task.key);
            }}
            sx={{
              cursor: "pointer",
            }}
          >
            {props.task.priority === true ? (
              <WrappedIcon
                sx={{
                  color: "error.main",
                }}
              >
                flag
              </WrappedIcon>
            ) : (
              <WrappedIcon
                sx={{
                  "&:hover ": {
                    color: "error.main",
                  },
                }}
              >
                flag
              </WrappedIcon>
            )}
          </IconButton>

          <IconButton
            onClick={() => {
              deleteItemHandler(props.task.key);
            }}
            sx={{ cursor: "pointer" }}
          >
            <WrappedIcon
              sx={{
                "&:hover ": {
                  color: "error.main",
                },
              }}
            >
              delete
            </WrappedIcon>
          </IconButton>

          <IconButton
            onClick={() => {
              archiveItemHandler(props.task.key);
            }}
          >
            {props.task.archive === true ? (
              <WrappedIcon sx={{ color: "primary.dark" }}>archive</WrappedIcon>
            ) : (
              <WrappedIcon>archive</WrappedIcon>
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              waitingItemHandler(props.task.key);
            }}
          >
            {props.task.waiting === true ? (
              <WrappedIcon sx={{ color: "primary.dark" }}>alarm</WrappedIcon>
            ) : (
              <WrappedIcon>alarm</WrappedIcon>
            )}
          </IconButton>
        </BoxItem>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ padding: 2 }}>
            <Typography paragraph>{props.task.text}</Typography>
          </Box>
        </Collapse>
      </Stack>
    </Item>
  );
};

export default ItemDiv;
