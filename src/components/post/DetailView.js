import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link, useHistory, useParams } from "react-router-dom";
import { getPost, deletePost } from "../../service/api.js";
import Comments from "../comments/comments.js";

const useStyle = makeStyles((theme) => ({
  container: {
    padding: "0 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    border: "1px solid black",
    padding: 5,
    borderRadius: "10px",
  },
  heading: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
  },
  subheading: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));
const DetailView = () => {
  const { id } = useParams();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const classes = useStyle();
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, [id]);
  const history = useHistory();
  const deleteBlog = async () => {
    await deletePost(post._id);
    history.push("/");
  };
  return (
    <Box className={classes.container}>
      <img src={post.picture || url} alt="banner" className={classes.image} />
      <Box className={classes.icons}>
        <Link
          to={`/update/${post._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Edit className={classes.icon} color="primary" />
        </Link>
        <Delete
          onClick={() => deleteBlog()}
          className={classes.icon}
          color="error"
        />
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Box className={classes.subheading}>
        <Link to={`/?username=${post.username}`} className={classes.link}>
          <Typography>
            Author:<span style={{ fontWeight: 600 }}>{post.username}</span>
          </Typography>
        </Link>

        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Box>
      <Typography>{post.description}</Typography>
      <Comments post={post} />
    </Box>
  );
};

export default DetailView;
