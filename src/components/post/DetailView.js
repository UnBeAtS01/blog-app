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
    color: "#3A8F8C",
    backgroundColor: "#172A46",
  },
  heading: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
    color: "#BAC4E4",
  },
  subheading: {
    color: "#BAC4E4",
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
          <Edit className={classes.icon} />
        </Link>
        <Delete
          onClick={() => deleteBlog()}
          className={classes.icon}
          color="#3A8F8C"
        />
      </Box>
      <Typography className={classes.heading}>
        <Box component="span" style={{ borderBottom: "1px solid #3A8F8C" }}>
          {post.title ? `${post.title.toUpperCase()}` : ""}
        </Box>
      </Typography>
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
      <Typography style={{ color: "#ADB8D7", fontWeight: 200, fontSize: 18 }}>
        {post.description}
      </Typography>
      <Comments post={post} />
    </Box>
  );
};

export default DetailView;
