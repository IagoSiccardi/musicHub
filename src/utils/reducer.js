export const initialState = {
  token: null,
  loading: false,
  user: ["1"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "access_token":
      return {
        ...state,
        token: action.payload,
        loading: action.loading,
      };

    case "user_info":
      return {
        ...state,
        user: action.payload,
        
      };

    case "playlist_info":
      return {
        ...state,
        playlist: action.payload,
      };

    case "recentlyPlayed_info":
      return {
        ...state,
        recentlyPlayed: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
