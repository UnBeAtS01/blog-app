import React, { useEffect, useState } from "react";
import {
  Box,
  makeStyles,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AddCircle } from "@material-ui/icons";
import { getPost, updatePost, uploadFile } from "../../service/api";

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

const UpdateView = ({ match }) => {
  const [post, setPost] = useState(intialValues);
  const [file, setFile] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, [match.params.id]);
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const image = await uploadFile(data);

        post.picture = image.data;
      }
    };
    getImage();
  }, [file, post]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const classes = useStyle();
  const history = useHistory();
  const updateBlog = async () => {
    await updatePost(match.params.id, post);
    history.push(`/details/${match.params.id}`);
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
          placeholder="Title"
          value={post.title}
          className={classes.textField}
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <Button
          variant="contained"
          style={{ marginLeft: "auto" }}
          color="primary"
          onClick={() => updateBlog()}
        >
          Update
        </Button>
      </FormControl>
      <TextareaAutosize
        minRows={5}
        placeholder="write here"
        className={classes.textarea}
        value={post.description}
        onChange={(e) => handleChange(e)}
        name="description"
      />
    </Box>
  );
};

export default UpdateView;
