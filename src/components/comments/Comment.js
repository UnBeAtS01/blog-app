import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { removeComment } from "../../service/api.js";
const useStyle = makeStyles({
  container: {
    marginTop: 30,
    backgroundColor: "#F5F5F5",
  },
  detail: {
    display: "flex",
  },
  name: {
    fontSize: 20,
    fontWeight: "bolder",
    marginRight: 20,
  },
  date: {
    color: "#878787",
    fontSize: 16,
  },
  delete: {
    marginLeft: "auto",
  },
});
function Comment({ comment }) {
  const classes = useStyle();
  const remove = async () => {
    await removeComment(comment._id);
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.detail}>
        <Typography className={classes.name}>{comment.name}</Typography>
        <Typography className={classes.date}>
          {new Date().toDateString(comment.date)}
        </Typography>
        <Delete onClick={() => remove()} className={classes.delete} />
      </Box>

      <Typography>{comment.commentdata}</Typography>
    </Box>
  );
}

export default Comment;
