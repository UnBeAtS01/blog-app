import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    background: "rgba( 9, 25, 47, 0.95 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 18px )",
    WebkitBackdropFilter: "blur( 18px )",
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
  eachele: {
    color: "#42A19A",
    fontWeight: 1000,
  },
});

function Header(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to={"/"} className={classes.link}>
          <Typography className={classes.eachele}> Home</Typography>
        </Link>
        <Typography className={classes.eachele}>About</Typography>
        <Typography className={classes.eachele}>Contact</Typography>
        <Typography className={classes.eachele}>LOGIN</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
