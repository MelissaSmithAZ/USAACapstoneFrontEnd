import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { addCarNotOnPolicyCheckList } from "../../store/CarNotOnPolicyCheckLists/action";
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";

const AddCarNotOnPolicyCheckList = props => {

    const [singleClaimView, setSingleClaimView] = useState({});
    const [theCallMember, setTheCallMember] = useState(false);
    const [theCallDoc, setTheCallDoc] = useState("");
    const [theRentalAgreement, setTheRentalAgreement] = useState(false);
    const [theClaimantLetter, setTheClaimantLetter] = useState(false);
    const [theClaimantCallDoc, setTheClaimantCallDoc] = useState("");
    const [theFinalLetterMember, setTheFinalLetterMember] = useState(false);
    const [theClaimantCall, setTheClaimantCall] = useState(false);
    const [theCoverageDecision, setTheCoverageDecision] = useState(false);
    
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
        
        <div>Add car not policy  </div>
    
    
    
    
    )
    


}
export default connect(null, { addCarNotOnPolicyCheckList })(
    withRouter(AddCarNotOnPolicyCheckList)
);

