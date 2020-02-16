import axios from "axios";

export const setPosts = posts => {
  return { type: "SET_POSTS", payload: posts };
};

export const startGetPosts = () => {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      const posts = response.data;
      // axios
      //   .get(`https://jsonplaceholder.typicode.com/users/${posts.userId}`)
      //   .then(response => {
      //     const users = response.data;

      // });
      console.log("SET POSTS", posts);
      dispatch(setPosts(posts));
    });
  };
};
