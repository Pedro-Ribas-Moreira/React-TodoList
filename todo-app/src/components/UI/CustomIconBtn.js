import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

const WrappedIcon = (props) => (
  <Icon {...props} sx={{ ...props.sx, padding: "10px" }} />
);

WrappedIcon.muiName = "Icon";

const CustomIconBtn = (props) => {
  return (
    <IconButton aria-label={props.ariaLabel} onClick={props.onClick}>
      <WrappedIcon sx={props.sx}>{props.children}</WrappedIcon>
    </IconButton>
  );
};

export default CustomIconBtn;
