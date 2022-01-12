import { Grid } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Post from "./Post.js";
import { getAllPosts } from "../../service/api.js";
const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      const collection = await getAllPosts(search);
      console.log(collection);
      setPosts(collection);
    };
    fetchData();
  }, [search]);
  return (
    posts.length &&
    posts.map((ele) => (
      <Grid key={ele._id} item lg={3} sm={4} xs={12}>
        <Link
          to={`/details/${ele._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Post post={ele} />
        </Link>
      </Grid>
    ))
  );
};

export default Posts;
