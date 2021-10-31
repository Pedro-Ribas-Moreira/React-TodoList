import React, { useState } from "react";
import { Checkbox, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

// expand div

import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  width: "80%",
  display: "flex",
  borderRadius: "20px",
  elevation: 14,
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.text.secondary,
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
          {props.children}
        </ItemTitle>
      ) : (
        <ItemTitle variant="h6">{props.children}</ItemTitle>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </div>
      </Collapse>
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
    </Item>
  );
};

export default ItemDiv;
