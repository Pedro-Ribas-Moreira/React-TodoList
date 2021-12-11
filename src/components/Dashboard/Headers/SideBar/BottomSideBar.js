import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

const WrappedIcon = (props) => (
  <Icon {...props} sx={{ ...props.sx }}>
    {props.children}
  </Icon>
);

// export const mainListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <WrappedIcon> dashboard </WrappedIcon>
//       </ListItemIcon>
//       <ListItemText primary="All Tasks" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <WrappedIcon> flag </WrappedIcon>
//       </ListItemIcon>
//       <ListItemText primary="Priorities" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <WrappedIcon> alarm </WrappedIcon>
//       </ListItemIcon>
//       <ListItemText primary="Waiting" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <WrappedIcon> archive </WrappedIcon>
//       </ListItemIcon>
//       <ListItemText primary="Archived" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <WrappedIcon
//           sx={{
//             color: "white",
//             background: "grey",
//             fontSize: "18px",
//             marginLeft: "4px",
//           }}
//         >
//           checkbox
//         </WrappedIcon>
//       </ListItemIcon>
//       <ListItemText primary="Completed" />
//     </ListItem>
//   </div>
// );

const BottomSideBar = () => {
  return (
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
};

export default BottomSideBar;
