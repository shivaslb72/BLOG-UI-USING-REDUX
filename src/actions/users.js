import axios from "axios";

export const setUsers = users => {
  return { type: "SET_USERS", payload: users };
};

export const startGetUsers = () => {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      const users = response.data;
      console.log("SET USERS", users);
      dispatch(setUsers(users));
    });
  };
};

// export const setPostsById = posts => {
//   return { type: "SET_POSTS_BY_ID", payload: posts };
// };
// export const startGetPostById = () => {
//   return dispatch => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts?userId=${1}`)
//       .then(response => {
//         const posts = response.data;
//         console.log("SET POSTSBYID", posts);
//         dispatch(setPostsById(posts));
//       });
//   };
// };
