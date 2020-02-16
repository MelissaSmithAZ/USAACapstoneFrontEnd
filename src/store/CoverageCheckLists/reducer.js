import * as types from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_COVERAGECHECKLISTS_PENDING:
    case types.ADD_COVERAGECHECKLIST_PENDING:
    case types.UPDATE_COVERAGECHECKLIST_PENDING:
    case types.REMOVE_COVERAGECHECKLIST_PENDING:
      return state;
    case types.FETCH_ONE_COVERAGECHECKLIST_FAILED:
    case types.ADD_COVERAGECHECKLIST_FAILED:
    case types.REMOVE_COVERAGECHECKLIST_FAILED:
    case types.UPDATE_COVERAGECHECKLIST_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_COVERAGECHECKLISTS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };
    case types.ADD_COVERAGECHECKLIST_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };
    case types.REMOVE_COVERAGECHECKLIST_SUCCESS:
      return {
        ...state,
        all: state.all.filter(
          coverageCheckList => coverageCheckList.id !== action.payload.id
        )
      };
    case types.UPDATE_COVERAGECHECKLIST_SUCCESS:
      console.log("action payload", action.payload);
      return {
        ...state,
        all: state.all.map(coverageCheckList => {
          if (coverageCheckList.id === action.payload.id) {
            return action.payload;
          } else {
            return coverageCheckList;
          }
        })
      };
    default:
      return state;
  }
};
