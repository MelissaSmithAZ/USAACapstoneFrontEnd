import * as types from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CARNOTONPOLICYCKLISTS_PENDING:
    case types.ADD_CARNOTONPOLICYCKLIST_PENDING:
    case types.UPDATE_CARNOTONPOLICYCKLIST_PENDING:
    case types.REMOVE_CARNOTONPOLICYCKLIST_PENDING:
      return state;
    case types.FETCH_ONE_CARNOTONPOLICYCKLIST_FAILED:
    case types.ADD_CARNOTONPOLICYCKLIST_FAILED:
    case types.REMOVE_CARNOTONPOLICYCKLIST_FAILED:
    case types.UPDATE_CARNOTONPOLICYCKLIST_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_CARNOTONPOLICYCKLISTS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };
    case types.ADD_CARNOTONPOLICYCKLIST_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };
    case types.REMOVE_CARNOTONPOLICYCKLIST_SUCCESS:
      return {
        ...state,
        all: state.all.filter(
          carNotOnPolicyCkList => carNotOnPolicyCkList.id !== action.payload.id
        )
      };
    case types.UPDATE_CARNOTONPOLICYCKLIST_SUCCESS:
      console.log("action payload", action.payload);
      return {
        ...state,
        all: state.all.map(carNotOnPolicyCkList => {
          if (carNotOnPolicyCkList.id === action.payload.id) {
            return action.payload;
          } else {
            return carNotOnPolicyCkList;
          }
        })
      };
    default:
      return state;
  }
};
