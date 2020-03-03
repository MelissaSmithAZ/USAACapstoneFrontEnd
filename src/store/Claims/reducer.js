import * as types from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CLAIMS_PENDING:
    case types.ADD_CLAIM_PENDING:
    case types.UPDATE_CLAIM_PENDING:
    case types.REMOVE_CLAIM_PENDING:
      return state;
    case types.FETCH_ONE_CLAIM_FAILED:
    case types.ADD_CLAIM_FAILED:
    case types.REMOVE_CLAIM_FAILED:
    case types.UPDATE_CLAIM_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_CLAIMS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };
    case types.ADD_CLAIM_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };
    case types.REMOVE_CLAIM_SUCCESS:
      console.log("action REMOVE payload", action.payload);

      return {
        ...state,
        all: state.all.filter(claim => claim.id !== action.payload.id)
      };
    case types.UPDATE_CLAIM_SUCCESS:
      console.log("action payload", action.payload);
      return {
        ...state,
        all: state.all.map(claim => {
          if (claim.id === action.payload.id) {
            return action.payload;
          } else {
            return claim;
          }
        })
      };
    default:
      return state;
  }
};
