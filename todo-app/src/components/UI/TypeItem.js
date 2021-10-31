import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

// import HomeIcon from "@mui/icons-material/Home";
// import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import FlagIcon from "@mui/icons-material/Flag";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Item = styled("div")(({ theme }) => ({
  width: "100%",
  borderRadius: "50px",
  padding: 4,
  display: "flex",
  alignItems: "center",
}));

const TypeItem = (props) => {
  return (
    <Item>
      <Button
        color="primary"
        endIcon
        size="large"
        startIcon={<Icon>props.icon</Icon>}
      ></Button>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ paddingLeft: "3%" }}
      >
        {props.children}
      </Typography>
    </Item>
  );
};

export default TypeItem;
