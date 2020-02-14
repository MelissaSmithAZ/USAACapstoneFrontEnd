import * as types from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_TRANSPORTATIONCHECKLISTS_PENDING:
    case types.ADD_TRANSPORTATIONCHECKLIST_PENDING:
    case types.UPDATE_TRANSPORTATIONCHECKLIST_PENDING:
    case types.REMOVE_TRANSPORTATIONCHECKLIST_PENDING:
      return state;
    case types.FETCH_ONE_TRANSPORTATIONCHECKLIST_FAILED:
    case types.ADD_TRANSPORTATIONCHECKLIST_FAILED:
    case types.REMOVE_TRANSPORTATIONCHECKLIST_FAILED:
    case types.UPDATE_TRANSPORTATIONCHECKLIST_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_TRANSPORTATIONCHECKLISTS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };
    case types.ADD_TRANSPORTATIONCHECKLIST_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };
    case types.REMOVE_TRANSPORTATIONCHECKLIST_SUCCESS:
      return {
        ...state,
        all: state.all.filter(
          transportationCheckList =>
            transportationCheckList.id !== action.payload.id
        )
      };
    case types.UPDATE_TRANSPORTATIONCHECKLIST_SUCCESS:
      console.log("action payload", action.payload);
      return {
        ...state,
        all: state.all.map(transportationCheckList => {
          if (transportationCheckList.id === action.payload.id) {
            return action.payload;
          } else {
            return transportationCheckList;
          }
        })
      };
    default:
      return state;
  }
};
