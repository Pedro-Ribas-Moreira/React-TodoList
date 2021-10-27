import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { AccessAlarm, ThreeDRotation, HomeIcon } from "@material-ui/icons";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const ItemDiv = (props) => {
  return (
    <div>
      <Checkbox />
      {props.children}
      <AccessAlarm />
      <ThreeDRotation />
      <AcUnitIcon />
    </div>
  );
};

export default ItemDiv;
