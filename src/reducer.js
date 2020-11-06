export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after dev
  //token:
  //'BQDi8Z6K4cSyGvV6CKr0TvEs5UwWQFzV1dW68Uyz0YK78-jHmoz5QjBKuUfpqClXB7m2R3TH3LGo_Oa7hz-caxmqQ6r9WqVqGc9Kf7ItYW5hPuc1J0MFWg64YyMxDpjGyaUC5gcG5LTV',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_RELEASE_RADAR':
      return {
        ...state,
        release_radar: action.release_radar,
      };
    default:
      return state;
  }
};
export default reducer;
