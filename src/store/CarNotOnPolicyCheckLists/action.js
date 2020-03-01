import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllCarNotOnPolicyCheckLists = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_CARNOTONPOLICYCKLISTS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_CARNOTONPOLICYCKLISTS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_CARNOTONPOLICYCKLISTS_FAILED,
      payload: err
    });
  }
};
export const fetchOneCarNotOnPolicyCkList = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_CARNOTONPOLICYCKLIST_PENDING
  });

  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_CARNOTONPOLICYCKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_CARNOTONPOLICYCKLIST_FAILED
    });
  }
};
export const addCarNotOnPolicyCkList = newCarNotOnPolicyCkList => async dispatch => {
  dispatch({
    type: types.ADD_CARNOTONPOLICYCKLIST_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newCarNotOnPolicyCkList);
    dispatch({
      type: types.ADD_CARNOTONPOLICYCKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_CARNOTONPOLICYCKLIST_FAILED,
      payload: err
    });
  }
};
export const updateCarNotOnPolicyCkList = (
  updatedCarNotOnPolicyCkList,
  id
) => async dispatch => {
  console.log(
    "**UPDATED Carnot on policy tACTION",
   updatedCarNotOnPolicyCkList
  );
  dispatch({
    type: types.UPDATE_CARNOTONPOLICYCKLIST_PENDING
  });
  try {
    let response = await axios.patch(
      BASE_URL + `/${updatedCarNotOnPolicyCkList.claim_id}`,
      updatedCarNotOnPolicyCkList
    );
    dispatch({
      type: types.UPDATE_CARNOTONPOLICYCKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.UPDATE_CARNOTONPOLICYCKLIST_FAILED,
      payload: err
    });
  }
};
export const removeCarNotOnPolicyCkList = id => async dispatch => {
  dispatch({
    type: types.REMOVE_CARNOTONPOLICYCKLIST_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_CARNOTONPOLICYCKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.UPDATE_CARNOTONPOLICYCKLIST_FAILED,
      payload: err
    });
  }
};
