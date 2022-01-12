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
      console.log(commentall);
    };
    getData();
  }, [post, commentall]);
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
      <Button variant="contained" color="primary" onClick={() => postcomment()}>
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
