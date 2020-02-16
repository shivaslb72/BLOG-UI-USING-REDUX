const intialState = [];

const usersReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_USERS": {
      return [...action.payload];
    }
    // case "SET_POSTS_BY_ID": {
    //   return [...action.payload];
    // }
    default: {
      return [...state];
    }
  }
};
export default usersReducer;
