import axios from 'axios';

// Initial/default State
const initialState = {
  candies: [],
};

// Action Types
const GOT_ALL_CANDIES = 'GOT_ALL_CANDIES_SUCCESSFULLY';

// Action Creators
const gotCandiesList = candies => ({
  type: GOT_ALL_CANDIES,
  candies,
});

// Thunk Creator
export const thunkToGetCandiesCreator = function() {
  return async function(dispatch) {
    const { data } = await axios.get('/api/candies');
    dispatch(gotCandiesList(data));
  };
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
