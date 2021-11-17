import * as React from "react";
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

const BottomList = (props) => (
  <div>
    <ListItem button>
      <ListItemIcon>
        <WrappedIcon> person </WrappedIcon>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WrappedIcon> settings </WrappedIcon>
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WrappedIcon> logout </WrappedIcon>
      </ListItemIcon>

      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);
export default BottomList;
