import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    background: `url(${"https://media.istockphoto.com/photos/neon-portrait-of-smiling-african-american-man-listening-music-with-picture-id1285766752?b=1&k=20&m=1285766752&s=170667a&w=0&h=d4BWDIqS6URlyAtD-bSME2dZDESMH8K7Mqq-vTw0VmY="}) center/55% repeat-x #000`,
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
      <Typography>Something Awesome</Typography>
      <Typography>CREATERS</Typography>
    </Box>
  );
}

export default Banner;
