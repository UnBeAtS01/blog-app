import { Box, makeStyles, Typography } from "@material-ui/core";

import React from "react";
const useStyle = makeStyles({
  container: {
    height: 350,
    margin: 10,
    borderRadius: 10,
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "&>*": {
      padding: "0px 5px 5px 5px",
    },
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    textAlign: "center",
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
  },
});
const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
  const classes = useStyle();
  const addelepses = (data, limit) => {
    return data.length > limit ? data.substr(0, limit) + "....." : data;
  };
  return (
    <Box className={classes.container}>
      <img src={url} alt="blogimage" className={classes.image} />
      <Typography className={classes.text}>{post.categories}</Typography>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Typography className={classes.text}>
        {addelepses(post.username, 40)}
      </Typography>
      <Typography className={classes.detail}>
        {addelepses(post.description, 100)}
      </Typography>
    </Box>
  );
};

export default Post;
