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
    FormText,
    Row,
    Card,

} from "reactstrap";
import SideNavForm from "../dashboard/SideNavForm";



const AddTransportationCheckList = props => {


    const [singleClaimView, setSingleClaimView] = useState({});
    const [theCall, setTheCall] = useState(false);
    const [theLetter, setTheLetter] = useState(false);
    const [theClaimantLetter, setTheClaimantLetter] = useState(false);
    const [theClaimantCall, setTheClaimantCall] = useState(false);
    const [theCoverageDecision, setTheCoverageDecision] = useState(null);
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
    
    const handleSubmit = e => {
        e.preventDefault();
        props.addTransportationCheckList({
            call: theCall,
            call_doc: theCallDoc,
            letter: theLetter,
            claimant_letter: theClaimantLetter,
            claimant_call: theClaimantCall,
            claimant_call_doc: theClaimantCallDoc,
            coverage_decision: theCoverageDecision,
            claim_id: singleClaimView.id
        },
            props
        )

        //   console.log("Claim id", claim.id)
    };

        return (

            <div>
                <Row>
                    <Col sm="8">
                        <Card id="editCard">
                            <Form onSubmit={handleSubmit}>
                                <a id="linkFormTxt" href="https://www.google.com" target="_blank">
                                    RideShare Procdure
              </a>
                                <FormGroup check id="form">
                                    <Label for="checkbox2"></Label>

                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                id="checkbox2"
                                                name="call"
                                                checked={theCall}
                                                onChange={() => setTheCall(!theCall)}
                                            />{" "}
                                            Member Called
                  </Label>
                                    </FormGroup>
                                </FormGroup>
                                <p id="formTxt">Call Doc must cover: * Advise of Coverage Issue
              * Phone number and name </p>


                                <FormGroup row id="form">
                                    <Label for="exampleText" >

                                    </Label>

                                    <Input
                                        type="textarea"
                                        id="exampleText"
                                        name="call_doc"
                                        value={theCallDoc}
                                        onChange={e => setTheCallDoc(e.target.value)}
                                    />

                                </FormGroup>

                                <FormGroup >
                                    <Label for="checkbox2" >

                                    </Label>

                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                id="checkbox2"
                                                name="letter"
                                                checked={theLetter}
                                                onChange={() => setTheLetter(!theLetter)}
                                            />{" "}
                                            <Link id="linkFormTxt" >Send Member Leter</Link>
                                        </Label>
                                    </FormGroup>

                                </FormGroup>
                                <FormGroup >
                                    <Label for="checkbox2">

                                    </Label>

                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                id="checkbox2"
                                                name="claimant_call"
                                                onChange={() => setTheClaimantCall(!theClaimantCall)}
                                                checked={theClaimantCall}
                                            />{" "}
                                            Claimant Called
                    </Label>
                                    </FormGroup>

                                </FormGroup>
                                <p id="formTxt">Call Doc must include: * Who was called * Phone number</p>


                                <FormGroup row>
                                    <Label for="exampleText">

                                    </Label>

                                    <Input
                                        type="textarea"
                                        id="exampleText"
                                        name="claimant_call_doc"
                                        value={theClaimantCallDoc}
                                        onChange={e => setTheClaimantCallDoc(e.target.value)}
                                    />

                                </FormGroup>
                                <FormGroup >
                                    <Label for="checkbox2" id="formTxt">
                                        Initial Claimant Leter
                </Label>

                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                id="checkbox2"
                                                name="claimant_letter"
                                                checked={theClaimantLetter}
                                                onChange={() =>
                                                    setTheClaimantLetter(!theClaimantLetter)
                                                }
                                            />{" "}
                                            <Link id="linkFormTxt">Send Claimant Leter</Link>
                                        </Label>
                                    </FormGroup>

                                </FormGroup>

                                <p id="formTxt">Once all information received make final decision</p>

                                <FormGroup row>
                                    <Label for="exampleSelect" id="formTxt" >

                                    </Label>

                                    <Input
                                        type="select"
                                        id="exampleText"
                                        name="coverage_decision"
                                        onChange={e => setTheCoverageDecision(e.target.value)}
                                    >
                                        <option id="exampleText">choose Coverage Decision</option>
                                        <option id="exampleText" value={true}>Coverage Confirmed</option>
                                        <option id="exampleText" value={false}>Coverage Denied</option>
                                    </Input>

                                </FormGroup>

                                <FormGroup check>

                                    <Button>Submit</Button>

                                </FormGroup>
                            </Form>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card id="sideNav">
                            <SideNavForm />
                        </Card>
                    </Col>
                </Row>
            </div>
    );
};

        


    export default connect(null, { addTransportationCheckList, updateClaim })(
        withRouter(AddTransportationCheckList)
    );