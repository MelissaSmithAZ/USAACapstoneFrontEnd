import React from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
// import ReactDOM from "react-dom";
// import { ModalProvider } from "react-modal-hook";
// import keyMirror from "keymirror";
import { updateClaim } from "../../store/Claims/action";
import { updateCoverageCheckList } from "../../store/CoverageCheckLists/action";

const EditCoverageCheckList = props => {
  return (
    <div>hello</div>

    //
  );
};
export default connect(null, { updateClaim, updateCoverageCheckList })(
  withRouter(EditCoverageCheckList)
);
