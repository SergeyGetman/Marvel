import {SET_LANGUAGE} from "./actions";

const initialValue = {
  language: 'en',
  theme: 'dark',
  date: '27.08.2021'
}

function mainReducer (state = initialValue, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state;
  }
}

export default mainReducer;