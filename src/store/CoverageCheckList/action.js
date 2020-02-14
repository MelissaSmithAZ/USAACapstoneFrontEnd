import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllCoverageCheckLists = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_COVERAGECHECKLISTS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_COVERAGECHECKLISTS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_COVERAGECHECKLISTS_FAILED,
      payload: err
    });
  }
};
export const fetchOneCoverageCheckList = id => async dispatch => {
  dispatch({
    type: types.FETCH_ONE_COVERAGECHECKLIST_PENDING
  });
  //can we put a id.name to search by name

  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: types.FETCH_ONE_COVERAGECHECKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ONE_COVERAGECHECKLIST_FAILED
    });
  }
};
export const addCoverageCheckList = newCoverageCheckList => async dispatch => {
  dispatch({
    type: types.ADD_COVERAGECHECKLIST_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newCoverageCheckList);
    dispatch({
      type: types.ADD_COVERAGECHECKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_COVERAGECHECKLIST_FAILED,
      payload: err
    });
  }
};

export const updateCoverageCheckList = (
  updatedCoverageCheckList,
  id
) => async dispatch => {
  console.log("UPDATED CoverageCheckList ACTION", updatedCoverageCheckList);
  //give me an object that has everything other than pets that is called cust
  // let {pets, ...cust } = updatedCustomer
  dispatch({
    type: types.UPDATE_COVERAGECHECKLIST_PENDING
  });
  try {
    let response = await axios.patch(
      BASE_URL + `/${id}`,
      updatedCoverageCheckList
    );
    dispatch({
      type: types.UPDATE_COVERAGECHECKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.UPDATE_COVERAGECHECKLIST_FAILED,
      payload: err
    });
  }
};
export const removeCoverageCheckList = id => async dispatch => {
  dispatch({
    type: types.REMOVE_COVERAGECHECKLIST_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_COVERAGECHECKLIST_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_COVERAGECHECKLIST_FAILED,
      payload: err
    });
  }
};
