import React, { useEffect, useState } from "react";
import { Checkbox, Typography, Stack, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import Icon from "@mui/material/Icon";
// expand div

import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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

  const listOfTasks = props.list.map((e) => {
    return (
      <Item key={e.key}>
        <Stack direction="column">
          <BoxItem>
            <Checkbox
              checked={e.check}
              onChange={() => {
                checkChangeHandler(e.key);
              }}
            />
            {e.check === true ? (
              <ItemTitle
                sx={{
                  textDecoration: "line-through",
                  color: "#D3D3D3",
                }}
              >
                {e.title}
              </ItemTitle>
            ) : (
              <ItemTitle>{e.title}</ItemTitle>
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
              aria-label="priority"
              onClick={() => {
                priorityItemHandler(e.key);
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              {e.priority === true ? (
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
                deleteItemHandler(e.key);
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
                archiveItemHandler(e.key);
              }}
            >
              {e.archive === true ? (
                <WrappedIcon sx={{ color: "primary.dark" }}>
                  archive
                </WrappedIcon>
              ) : (
                <WrappedIcon>archive</WrappedIcon>
              )}
            </IconButton>
            <IconButton
              onClick={() => {
                waitingItemHandler(e.key);
              }}
            >
              {e.waiting === true ? (
                <WrappedIcon sx={{ color: "primary.dark" }}>alarm</WrappedIcon>
              ) : (
                <WrappedIcon>alarm</WrappedIcon>
              )}
            </IconButton>
          </BoxItem>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box sx={{ padding: 2 }}>
              <Typography paragraph>{e.text}</Typography>
            </Box>
          </Collapse>
        </Stack>
      </Item>
    );
  });

  return listOfTasks;
};

export default ItemDiv;

// <ListItem button>
// <ListItemIcon>
//   <WrappedIcon> flag </WrappedIcon>
// </ListItemIcon>
// <ListItemText primary="Priorities" />
// </ListItem>
// <ListItem button>
// <ListItemIcon>
//   <WrappedIcon> alarm </WrappedIcon>
// </ListItemIcon>
// <ListItemText primary="Waiting" />
// </ListItem>
// <ListItem button>
// <ListItemIcon>
//   <WrappedIcon> archive </WrappedIcon>
// </ListItemIcon>
// <ListItemText primary="Archived" />
// </ListItem>
// <ListItem button>
// <ListItemIcon>
//   <WrappedIcon
//     sx={{
//       color: "white",
//       background: "grey",
//       fontSize: "18px",
//       marginLeft: "4px",
//     }}
//   >
//     checkbox
//   </WrappedIcon>
// </ListItemIcon>
// <ListItemText primary="Completed" />
// </ListItem>

//   <Item key={props.id}>
//     <Stack direction="column">
//       <BoxItem>
//         <Checkbox checked={props.isChecked} onChange={checkChangeHandler} />
//         {props.isChecked === true ? (
//           <ItemTitle
//             sx={{
//               textDecoration: "line-through",
//               color: "#D3D3D3",
//             }}
//           >
//             {props.title}
//           </ItemTitle>
//         ) : (
//           <ItemTitle>{props.title}</ItemTitle>
//         )}

//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>

//         <IconButton
//           aria-label="priority"
//           onClick={() => {
//             priorityItemHandler(props.id);
//           }}
//           sx={{
//             cursor: "pointer",
//           }}
//         >
//           {props.isPriority === true ? (
//             <WrappedIcon
//               sx={{
//                 color: "error.main",
//               }}
//             >
//               flag
//             </WrappedIcon>
//           ) : (
//             <WrappedIcon
//               sx={{
//                 "&:hover ": {
//                   color: "error.main",
//                 },
//               }}
//             >
//               flag
//             </WrappedIcon>
//           )}
//         </IconButton>

//         <IconButton
//           onClick={() => {
//             deleteItemHandler(props.id);
//           }}
//           sx={{ cursor: "pointer" }}
//         >
//           <WrappedIcon
//             sx={{
//               "&:hover ": {
//                 color: "error.main",
//               },
//             }}
//           >
//             delete
//           </WrappedIcon>
//         </IconButton>

//         <IconButton
//           onClick={() => {
//             archiveItemHandler(props.id);
//           }}
//         >
//           {props.isArchived === true ? (
//             <WrappedIcon sx={{ color: "primary.dark" }}>archive</WrappedIcon>
//           ) : (
//             <WrappedIcon>archive</WrappedIcon>
//           )}{" "}
//         </IconButton>
//         <IconButton
//           onClick={() => {
//             waitingItemHandler(props.id);
//           }}
//         >
//           {props.isWaiting === true ? (
//             <WrappedIcon sx={{ color: "primary.dark" }}>alarm</WrappedIcon>
//           ) : (
//             <WrappedIcon>alarm</WrappedIcon>
//           )}
//         </IconButton>
//       </BoxItem>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <Box sx={{ padding: 2 }}>
//           <Typography paragraph>{props.text}</Typography>
//         </Box>
//       </Collapse>
//     </Stack>
//   </Item>
// );
