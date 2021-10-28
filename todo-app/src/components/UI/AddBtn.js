import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const AddBtn = (props) => {
  return (
    <AddCircleOutlineIcon
      sx={{
        color: "primary.dark",
        background: "white",
        cursor: "pointer",
        fontSize: "100px",
      }}
      onClick={props.onClick}
    />
  );
};

export default AddBtn;
