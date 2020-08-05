export const initalState = {
  user: null,
  // token:
  //   "BQClb57d76FBtQUUC9sxLp_yWm4JHbalhMK8hi3QpBaKDWUkOftupvvmk9nX-HpDeWk8zTwP5e6ye0moCnAZbG4SsHRJXNVbp20nrks2kl1y9XnW1vuvtJ9CMl6Y75xDLgkj3O8qexQebwhxBQbpDE7Cbb8a",
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_FAVS":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
