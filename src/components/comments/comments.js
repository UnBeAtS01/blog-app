import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextareaAutosize,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { newComment, getcomments } from "../../service/api";
import CommentShow from "./Comment.js";
const useStyle = makeStyles({
  components: {
    marginTop: 100,
    margin: "10px 50px 0 50px",
  },
  textarea: {
    width: "100%",
    color: "#09192F",
  },
  postB: {
    backgroundColor: "#172A46",
    color: "#60EDDA",
    fontWeight: 600,
    "&:hover": {
      color: "#172A46",
      backgroundColor: "#60EDDA",
    },
  },
});
const intialval = {
  name: "",
  commentId: "",
  date: new Date(),
  commentdata: "",
};
function Comments({ post }) {
  const classes = useStyle();
  const [comment, setComment] = useState(intialval);
  const [commentall, setfetchComments] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getcomments(post._id);
      setfetchComments(res);
    };
    getData();
  }, [post]);
  const handleChange = (e) => {
    setComment({
      ...comment,
      name: post.username,
      postId: post._id,
      commentdata: e.target.value,
    });
  };
  const postcomment = async () => {
    await newComment(comment);
  };
  return (
    <Box className={classes.components}>
      <Typography>COMMENTS</Typography>
      <TextareaAutosize
        className={classes.textarea}
        minRows={5}
        onChange={(e) => handleChange(e)}
      />
      <Button
        variant="contained"
        className={classes.postB}
        onClick={() => postcomment()}
      >
        Post
      </Button>
      <Box>
        {commentall.length &&
          commentall.map((ele) => <CommentShow comment={ele} />)}
      </Box>
    </Box>
  );
}

export default Comments;
