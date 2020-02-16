const initialState = [];

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMMENTS": {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};
