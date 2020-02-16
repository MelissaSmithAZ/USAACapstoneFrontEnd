import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllClaims = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_CLAIMS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_CLAIMS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_CLAIMS_FAILED,
      payload: err
    });
  }
};
export const fetchOneClaim = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_CLAIM_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_CLAIM_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_CLAIM_FAILED
    });
  }
};
export const addOneClaim = newClaim => async dispatch => {
  dispatch({
    type: types.ADD_CLAIM_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newClaim);
    dispatch({
      type: types.ADD_CLAIM_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_CLAIM_FAILED,
      payload: err
    });
  }
};
export const updateClaim = (updatedClaim, id) => async dispatch => {
  dispatch({
    type: types.UPDATE_CLAIM_PENDING
  });

  try {
    let response = await axios.patch(BASE_URL + `/${id}`, updatedClaim);
    dispatch({
      type: types.UPDATE_CLAIM_SUCCESS,
      paylaod: response.data
    });
  } catch (err) {
    dispatch({
      type: types.UPDATE_CLAIM_FAILED,
      payload: err
    });
  }
};

export const removeClaim = id => async dispatch => {
  dispatch({
    type: types.REMOVE_CLAIM_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_CLAIM_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_CLAIM_FAILED,
      payload: err
    });
  }
};
