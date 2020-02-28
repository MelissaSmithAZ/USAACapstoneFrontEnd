import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateTransportationCheckList } from '../../store/TransportationCheckLists/action'

const EditCoverageCheckList = props => { 


    return (

        <div>Edit Transportation</div>
    )

}
export default connect(null, { updateTransportationCheckList })(
    withRouter(EditCoverageCheckList)
);