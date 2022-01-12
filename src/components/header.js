import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    background: "#ffffff",
    color: "black",
  },
  container: {
    justifyContent: "center",
    "& > *": {
      padding: 20,
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

function Header(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to={"/"} className={classes.link}>
          <Typography> Home</Typography>
        </Link>
        <Typography>About</Typography>
        <Typography>Contact</Typography>
        <Typography>LOGIN</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
