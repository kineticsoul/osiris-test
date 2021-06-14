import { GET_RANDOM_USER, APP_LAYOUT_ERROR } from '../actions/types';

const initialState = {
  randomUser: null,
  error: null,
  loading: true
};

const reducer = (state = initialState, action ) => {
  switch(action.type) {
    case GET_RANDOM_USER:
      return {
        ...state,
        randomUser: action.payload,
        loading: false,
      }
    case APP_LAYOUT_ERROR:
      console.error(action.payload);
      return {
        error: action.payload,
        ...state,
      }
    default: 
      return state;
  }
};


export default reducer;