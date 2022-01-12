import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    background: `url(${"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"}) center/55% repeat-x #000`,
    height: "50vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& :first-child": {
      fontSize: 80,
      color: "#ffffff",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 20,
      background: "#ffffff",
      color: "black",
    },
  },
});
function Banner(props) {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography>Blog</Typography>
      <Typography>code for learning</Typography>
    </Box>
  );
}

export default Banner;
