import axios from "axios";

export const setComments = comments => {
  return { type: "SET_COMMENTS", payload: comments };
};

export const startGetComments = () => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => {
        const comments = response.data;
        console.log("SET COMMENTS", comments);
        dispatch(setComments(comments));
      });
  };
};
