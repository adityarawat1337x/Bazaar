import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import CartComp from "../Cart/CartComp2";

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

export default function CartModal() {
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <p
        aria-describedby={id}
        variant="contained"
        color="secondary"
        onMouseOver={handleClick}
      >
        🛍️
      </p>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <CartComp />
      </Popover>
    </div>
  );
}
