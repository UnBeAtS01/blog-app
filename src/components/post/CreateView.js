import React, { useEffect, useState } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";

import { createPost, uploadFile } from "../../service/api.js";
import { useHistory } from "react-router-dom";
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
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textField: {
    margin: "0 30px",
    fontSize: 25,
    //flex: 1,
  },
  textarea: {
    width: "100%",
    marginTop: 50,
    border: "none",
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
}));
const intialValues = {
  title: "",
  description: "",
  picture: "",
  username: "ankitsinha",
  categories: "all",
  createdDate: new Date(),
};
const select = [
  {
    value: "Music",
    label: "Music",
  },
  {
    value: "Tech",
    label: "Tech",
  },

  {
    value: "Movies",
    label: "Movies",
  },
  {
    value: "Sports",
    label: "Sports",
  },
  {
    value: "Fashion",
    label: "Fashion",
  },
];
const CreateView = (props) => {
  const history = useHistory();
  const classes = useStyle();
  const [post, setPost] = useState(intialValues);
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const image = await uploadFile(data);
        console.log(image);
        post.picture = image.data;
      }
    };
    getImage();
  }, [file, post]);

  const savePost = async () => {
    await createPost(post);
    history.push("/");
  };
  return (
    <Box className={classes.container}>
      <img src={url} alt="create-pic" className={classes.image} />
      <FormControl className={classes.form}>
        <label htmlFor="fileInput">
          <AddCircle color="action" fontSize="large" />
        </label>

        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          id="fileInput"
          style={{ display: "none" }}
        />
        <InputBase
          onChange={(e) => handleChange(e)}
          placeholder="Title"
          className={classes.textField}
          name="title"
        />

        <Button
          variant="contained"
          style={{ marginLeft: "auto" }}
          color="primary"
          onClick={() => savePost()}
        >
          PUBLISH
        </Button>
      </FormControl>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={post.categories}
        onChange={(e) => handleChange(e)}
        helperText="Please select category"
        name="categories"
      >
        {select.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextareaAutosize
        minRows={5}
        placeholder="write here"
        className={classes.textarea}
        onChange={(e) => handleChange(e)}
        name="description"
      />
    </Box>
  );
};

export default CreateView;
