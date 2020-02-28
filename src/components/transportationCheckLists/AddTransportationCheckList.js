import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateTransportationCheckList, addTransportationCheckList } from '../../store/TransportationCheckLists/action'

const AddTransportationCheckList = props => {


    return (

        <div>Add Transportation</div>
    )

}
export default connect(null, { addTransportationCheckList })(
    withRouter(AddTransportationCheckList)
);