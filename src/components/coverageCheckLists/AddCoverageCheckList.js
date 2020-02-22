import React from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
// import ReactDOM from "react-dom";
// import { ModalProvider } from "react-modal-hook";
// import keyMirror from "keymirror";
import { updateClaim } from "../../store/Claims/action";
import { addCoverageCheckList } from "../../store/CoverageCheckLists/action";


const AddCoverageCheckList = props => {


    return (
        <div >
        hello
        </div>


// 
    )
}
export default connect(null, { updateClaim, addCoverageCheckList }) (withRouter(
  AddCoverageCheckList));