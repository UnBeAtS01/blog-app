import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { removeComment } from "../../service/api.js";
const useStyle = makeStyles({
  container: {
    marginTop: 20,
    background: "rgba( 23, 42, 70, 1 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 20px )",
    WebkitBackdropFilter: "blur( 20px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  detail: {
    display: "flex",
  },
  name: {
    fontSize: 18,
    fontWeight: "bolder",
    marginRight: 20,
    color: "#43A29B",
    marginTop: 5,
    marginLeft: 5,
  },
  date: {
    color: "#878787",
    fontSize: 16,
  },
  delete: {
    marginLeft: "auto",
    color: "#4EC4B0",
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
        <Close onClick={() => remove()} className={classes.delete} />
      </Box>

      <Typography style={{ color: "#69738E", marginLeft: 5, fontSize: 16 }}>
        {comment.commentdata}
      </Typography>
    </Box>
  );
}

export default Comment;
