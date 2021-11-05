import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";

const WrappedIcon = (props) => (
  <Icon {...props} sx={{ ...props.sx }}>
    {" "}
    {props.children}{" "}
  </Icon>
);

const TopList = (props) => {
  const items = props.list;

  console.log(items);

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
          <Badge badgeContent={4} color="secondary">
            <WrappedIcon> flag </WrappedIcon>
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Priorities" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WrappedIcon> alarm </WrappedIcon>
        </ListItemIcon>
        <ListItemText primary="Waiting" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WrappedIcon> archive </WrappedIcon>
        </ListItemIcon>
        <ListItemText primary="Archived" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
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
        </ListItemIcon>
        <ListItemText primary="Completed" />
      </ListItem>
    </div>
  );
};

export default TopList;
