import * as types from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CARNOTONPOLICYCHECKLISTS_PENDING:
    case types.ADD_CARNOTONPOLICYCHECKLIST_PENDING:
    case types.UPDATE_CARNOTONPOLICYCHECKLIST_PENDING:
    case types.REMOVE_CARNOTONPOLICYCHECKLIST_PENDING:
      return state;
    case types.FETCH_ONE_CARNOTONPOLICYCHECKLIST_FAILED:
    case types.ADD_CARNOTONPOLICYCHECKLIST_FAILED:
    case types.REMOVE_CARNOTONPOLICYCHECKLIST_FAILED:
    case types.UPDATE_CARNOTONPOLICYCHECKLIST_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_CARNOTONPOLICYCHECKLISTS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };
    case types.ADD_CARNOTONPOLICYCHECKLIST_SUCCESS:
      return {

        //returning an object the new instance of state
        //we are creating acopy of all the properties of the old object and inserthem into the new object literal, and be able to override all prperties
        // ...state,
        all: [action.payload, ...state.all],

        
       
      };
    case types.REMOVE_CARNOTONPOLICYCHECKLIST_SUCCESS:
      return {
        // ...state,
        all: state.all.filter(
          carNotOnPolicyCheckList => carNotOnPolicyCheckList.id !== action.payload.id
        )
      };
    case types.UPDATE_CARNOTONPOLICYCHECKLIST_SUCCESS:
      console.log("action payload", action.payload);
      return {
        ...state,
        all: state.all.map(carNotOnPolicyCheckList => {
          if (carNotOnPolicyCheckList.id === action.payload.id) {
            return action.payload;
          } else {
            return carNotOnPolicyCheckList;
          }
        })
      };
    default:
      return state;
  }
};
