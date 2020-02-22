import ActionTypes from "../../store/Modal/constants";

const initialState = {
  modalType: null,
  modalProps: {
    open: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        modalProps: action.modalPropsk,
        modalType: action.modalType,
        type: action.type
      };
    case ActionTypes.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};
