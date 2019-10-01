import * as actionTypes from '../actions/actionTypes';
import axios from '../../axiosInstance/axiosInstance';

export const decrement = () => {
 return {
  type: actionTypes.PREV_PAGE
 }
}

export const increment = () => {
 return {
  type: actionTypes.NEXT_PAGE
 }
}

export const setRequest = () => {
 return {
  type: actionTypes.AJAX_REQUEST
 }
}

export const successRequest = (images) => {
 return {
  type: actionTypes.AJAX_SUCCESS,
  images: images
 }
}

export const failedRequest = (error) => {
 return {
  type: actionTypes.AJAX_FAIL,
  error: error
 }
}

export const errorNull = () => {
 return {
  type: actionTypes.ERRORNULL
 }
}

export const makeRequest = (url) => {
 return dispatch => {

  dispatch(setRequest());

  // make httpRequest and save response
  axios
   .get(url)
   .then(res => {

    dispatch(successRequest(res.data.results));

   })
   .catch(error => {
    dispatch(failedRequest(error.message))
   });
 }
}