import * as actionType from '../actions/actionTypes';

const initialState = {
 unsplashImages: null,
 error: null,
 searchTimer: false,
 spinnerTimer: false
}


const reducer = (state = initialState, action) => {
 switch (action.type) {
  case actionType.AJAX_REQUEST:
   return {
    ...state,
    error: null,
    searchTimer: false,
    spinnerTimer: true,
    unsplashImages: null
   }
  case actionType.AJAX_SUCCESS:
   return {
    ...state,
    unsplashImages: action.images,
    error: null,
    searchTimer: true,
    spinnerTimer: false
   }
  case actionType.AJAX_FAIL:
   return {
    ...state,
    error: action.error,
    searchTimer: false,
    spinnerTimer: false
   }
  case actionType.ERRORNULL:
   return {
    ...state,
    error: null
   }
  default:
   return state;
 }
}

export default reducer;