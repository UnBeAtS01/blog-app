import { Box, makeStyles, Typography } from "@material-ui/core";

import React from "react";
const useStyle = makeStyles({
  container: {
    height: 350,
    margin: 10,

    background: "rgba( 23, 42, 70, 0.85 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 14px )",
    WebkitBackdropFilter: "blur( 14px )",
    borderRadius: "10px",
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
    fontSize: 12,
    marginRight: "auto",
    color: "grey",
  },
  text2: {
    fontSize: 12,
    marginTop: "auto",
    color: "grey",
  },
  heading: {
    fontSize: 18,
    fontWeight: 500,
    color: "#C5CFEF",
    marginTop: 30,
    borderBottom: "1px solid #4DBBAE",
    marginBottom: 20,
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
    color: "#8A96B4",
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

      <Typography className={classes.heading}>
        {addelepses(post.title, 40)}
      </Typography>
      <Typography className={classes.text}>
        <span style={{ fontWeight: "600" }}>author: </span>
        {post.username}
      </Typography>
      <Typography className={classes.text}>
        {new Date(post.createdDate).toDateString()}
      </Typography>
      <Typography className={classes.detail}>
        {addelepses(post.description, 180)}
      </Typography>
      <Typography className={classes.text2}>{post.categories}</Typography>
    </Box>
  );
};

export default Post;
