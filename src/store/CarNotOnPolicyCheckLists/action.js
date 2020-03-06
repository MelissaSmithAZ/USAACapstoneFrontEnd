import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllCarNotOnPolicyCheckLists = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_CARNOTONPOLICYCHECKLISTS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_CARNOTONPOLICYCHECKLISTS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_CARNOTONPOLICYCHECKLISTS_FAILED,
      payload: err
    });
  }
};
export const fetchOneCarNotOnPolicyCheckList = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_CARNOTONPOLICYCHECKLIST_PENDING
  });

  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_CARNOTONPOLICYCHECKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_CARNOTONPOLICYCHECKLIST_FAILED
    });
  }
};
export const addCarNotOnPolicyCheckList = (newCarNotOnPolicyCheckList, props )=> async dispatch => {

  
  // console.log(
  //   "**ADD CarNotONPolicy  ACTION",
  //   newCarNotOnPolicyCheckList
  // );
  dispatch({
    type: types.ADD_CARNOTONPOLICYCHECKLIST_PENDING
  });
  try {
    let response = await axios.post(BASE_URL + `/${newCarNotOnPolicyCheckList.claim_id}`, newCarNotOnPolicyCheckList);
    console.log("***HISTORY ", newCarNotOnPolicyCheckList)

    dispatch({
      type: types.ADD_CARNOTONPOLICYCHECKLIST_SUCCESS,
      payload: response.data,
  
    })
    props.history.goBack()
    // props.history.push(`/claims/${newCarNotOnPolicyCheckList.claim_id}`)

  } catch (err) {
    dispatch({
      type: types.ADD_CARNOTONPOLICYCHECKLIST_FAILED,
      payload: err
    });
  }
};
export const updateCarNotOnPolicyCheckList = (
  updatedCarNotOnPolicyCheckList, props
) => async dispatch => {
  console.log(
    "**UPDATED CarNotONPolicy  ACTION",
    updatedCarNotOnPolicyCheckList
  );
  //give me an object that has everything other than pets that is called cust
  // let {pets, ...cust } = updatedCustomer
  dispatch({
    type: types.UPDATE_CARNOTONPOLICYCHECKLIST_PENDING
  });
  // console.log("ID IN TRNS",id)
  try {
    let response = await axios.patch(
      BASE_URL + `/${updatedCarNotOnPolicyCheckList.claim_id}`,
      updatedCarNotOnPolicyCheckList
    );
    
    dispatch({
      type: types.UPDATE_CARNOTONPOLICYCHECKLIST_SUCCESS,
      payload: response.data
    })
    props.history.goBack()

  } catch (err) {
    dispatch({
      type: types.UPDATE_CARNOTONPOLICYCHECKLIST_FAILED,
      payload: err
    });
  }
};
export const removeCarNotOnPolicyCheckList = id => async dispatch => {
  dispatch({
    type: types.REMOVE_CARNOTONPOLICYCHECKLIST_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_CARNOTONPOLICYCHECKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_CARNOTONPOLICYCHECKLIST_FAILED,
      payload: err
    });
  }
};
