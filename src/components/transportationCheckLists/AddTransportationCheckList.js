import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateTransportationCheckList, addTransportationCheckList } from '../../store/TransportationCheckLists/action';
import { updateClaim } from "../../store/Claims/action";

import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";


const AddTransportationCheckList = props => {


    const [singleClaimView, setSingleClaimView] = useState({});
    const [theCall, setTheCall] = useState(false);
    const [theLetter, setTheLetter] = useState(false);
    const [theClaimantLetter, setTheClaimantLetter] = useState(false);
    const [theClaimantCall, setTheClaimantCall] = useState(false);
    const [theCoverageDecision, setTheCoverageDecision] = useState(false);
    const [theCallDoc, setTheCallDoc] = useState("");
    const [theClaimantCallDoc, setTheClaimantCallDoc] = useState("");

    const [theTransportationCheckList, setTheTransportationCheckList] = useState({});

    const claims = useSelector(state => state.claims.all);

   

    useEffect(() => {
        // console.log("useEffect", props.singleClaimView)
        // setSingleClaimView(props.singleClaimView);
        setSingleClaimView(
            claims.find(claim => claim.claim_number === Number(props.match.params.id))
        );
    }, [claims]);

     console.log("SINGLEClaim porp", singleClaimView)
     console.log("claim porp", claims)
     console.log("claim porp", props)

    return (

        <div>Add Transportation</div>
    )

}
export default connect(null, { addTransportationCheckList, updateClaim })(
    withRouter(AddTransportationCheckList)
);