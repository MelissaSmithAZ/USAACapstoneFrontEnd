import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllTransportationCheckList = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_TRANSPORTATIONCHECKLISTS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_TRANSPORTATIONCHECKLISTS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_TRANSPORTATIONCHECKLISTS_FAILED,
      payload: err
    });
  }
};
export const fetchOneTransportationCheckLisat = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_TRANSPORTATIONCHECKLIST_PENDING
  });
  //can we put a id.name to search by name

  try {
    let response = await axios.get(BASE_URL + ``);
    dispatch({
      type: types.FETCH_ONE_TRANSPORTATIONCHECKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_TRANSPORTATIONCHECKLIST_FAILED
    });
  }
};
export const addTransportationCheckList = newTransportationCheckList => async dispatch => {
  dispatch({
    type: types.ADD_TRANSPORTATIONCHECKLIST_PENDING
  });
  try {
    let response = await axios.post(BASE_URL + `/${newTransportationCheckList.claim_id}`, newTransportationCheckList);
    dispatch({
      type: types.ADD_TRANSPORTATIONCHECKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_TRANSPORTATIONCHECKLIST_FAILED,
      payload: err
    });
  }
};

export const updateTransportationCheckList = (
  updatedTransportationCheckList 
) => async dispatch => {
  console.log(
    "UPDATED TransportationCheckList ACTION",
    updatedTransportationCheckList
  );
  //give me an object that has everything other than pets that is called cust
  // let {pets, ...cust } = updatedCustomer
  dispatch({
    type: types.UPDATE_TRANSPORTATIONCHECKLIST_PENDING
  });
  // console.log("ID IN TRNS",id)
  try {
    let response = await axios.patch(
      BASE_URL + `/${updatedTransportationCheckList.claim_id}`,
      updatedTransportationCheckList
    );
    dispatch({
      type: types.UPDATE_TRANSPORTATIONCHECKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.UPDATE_TRANSPORTATIONCHECKLIST_FAILED,
      payload: err
    });
  }
};
export const removeTransportationCheckList = id => async dispatch => {
  dispatch({
    type: types.REMOVE_TRANSPORTATIONCHECKLIST_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_TRANSPORTATIONCHECKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_TRANSPORTATIONCHECKLIST_FAILED,
      payload: err
    });
  }
};
