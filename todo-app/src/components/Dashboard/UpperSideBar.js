import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

const WrappedIcon = (props) => (
  <Icon {...props} sx={{ ...props.sx }}>
    {" "}
    {props.children}{" "}
  </Icon>
);

const UpperSideBar = (props) => {
  const numberBadge = (arg) => {
    const list = props.list;
    let count = 0;
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      if (arg === "priority") {
        if (list[i].priority) {
          count++;
        }
      } else if (arg === "waiting") {
        if (list[i].waiting) {
          count++;
        }
      } else if (arg === "completed") {
        if (list[i].check) {
          count++;
        }
      } else if (arg === "archive") {
        if (list[i].archive) {
          count++;
        }
      }
    }
    console.log(count);
    return count;
  };
  //for each item add a count+
  // create a badge with the count

  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <WrappedIcon> dashboard </WrappedIcon>
        </ListItemIcon>
        <ListItemText primary="All Tasks" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Badge badgeContent={numberBadge("priority")} color="secondary">
            <WrappedIcon> flag </WrappedIcon>
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Priorities" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Badge badgeContent={numberBadge("waiting")} color="secondary">
            <WrappedIcon> alarm </WrappedIcon>
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Waiting" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Badge badgeContent={numberBadge("archive")} color="secondary">
            <WrappedIcon> archive </WrappedIcon>
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Archived" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Badge badgeContent={numberBadge("completed")} color="secondary">
            <WrappedIcon
              sx={{
                color: "white",
                background: "grey",
                fontSize: "18px",
                marginLeft: "4px",
              }}
            >
              checkbox
            </WrappedIcon>
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Completed" />
      </ListItem>
    </div>
  );
};

export default UpperSideBar;
