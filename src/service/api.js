import axios from "axios";

const URL = "https://blog-server-exp.herokuapp.com";
export const createPost = async (postdata) => {
  try {
    return await axios.post(`${URL}/create`, postdata);
  } catch (error) {
    console.log("Error while calling create api");
  }
};

export const getAllPosts = async (param) => {
  try {
    let response = await axios.get(`${URL}/posts${param}`);

    return response.data;
  } catch (error) {
    console.log("error while calling getAllPosts api", error);
  }
};

export const getPost = async (id) => {
  try {
    let res = await axios.get(`${URL}/post/${id}`);
    return res.data;
  } catch (error) {
    console.log("error while calling getPost api", error);
  }
};

export const updatePost = async (id, post) => {
  try {
    await axios.post(`${URL}/update/${id}`, post);
  } catch (error) {
    console.log("error while updating ", error);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log("error while deleting ", error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${URL}/file/upload`, data);
  } catch (error) {
    console.log("error while uploading the image", error);
  }
};

export const newComment = async (data) => {
  try {
    return await axios.post(`${URL}/comment/new`, data);
  } catch (error) {
    console.log("error while posting comment");
  }
};

export const getcomments = async (id) => {
  try {
    const data = await axios.get(`${URL}/comment/${id}`);
    console.log(data);
    return data.data;
  } catch (error) {
    console.log("error while getting comments");
  }
};
export const removeComment = async (id) => {
  try {
    return await axios.delete(`${URL}/comment/delete/${id}`);
  } catch (error) {
    console.log("error while deleting comment");
  }
};
