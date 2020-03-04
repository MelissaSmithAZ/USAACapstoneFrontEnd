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
        }, props.history.goBack());

        //   console.log("Claim id", claim.id)
    };

        return (

        <Form onSubmit={handleSubmit}>
            <p>summary of items needed and link to resource</p>
            <FormGroup row>
                <Label for="checkbox2" sm={2}>
                    Member Called
        </Label>
                <Col sm={{ size: 10 }}>
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
                </Col>
            </FormGroup>
            <p>Call Doc must cover: x,y,z</p>

            <FormGroup row>
                <Label for="exampleText" sm={2}>
                    Member Call Doc
        </Label>
                <Col sm={10}>
                    <Input
                        type="textarea"
                        id="exampleText"
                        name="call_doc"
                        value={theCallDoc}
                        onChange={(e) => setTheCallDoc(e.target.value)}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="checkbox2" sm={2}>
                    Initial Member Leter
        </Label>
                <Col sm={{ size: 10 }}>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                id="checkbox2"
                                name="letter"
                                checked={theLetter}
                                onChange={() => setTheLetter(!theLetter)}
                            />{" "}
                            <Link>Send Member Leter</Link>
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="checkbox2" sm={2}>
                    Claimant Called
        </Label>
                <Col sm={{ size: 10 }}>
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
                </Col>
            </FormGroup>
            <p>Call Doc must cover: x,y,z</p>

            <FormGroup row>
                <Label for="exampleText" sm={2}>
                    Claimat Call Doc
        </Label>
                <Col sm={10}>
                    <Input
                        type="textarea"
                        id="exampleText"
                        name="claimant_call_doc"
                        value={theClaimantCallDoc}
                        onChange={(e) => setTheClaimantCallDoc(e.target.value)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="checkbox2" sm={2}>
                    Initial Claimant Leter
        </Label>
                <Col sm={{ size: 10 }}>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                id="checkbox2"
                                name="claimant_letter"
                                checked={theClaimantLetter}
                                onChange={() => setTheClaimantLetter(!theClaimantLetter)}
                            />{" "}
                            <Link>Send Claimant Leter</Link>
                        </Label>
                    </FormGroup>
                </Col>
            </FormGroup>

            <p>Once all information received make final decision</p>

            <FormGroup row>
                <Label for="exampleSelect" sm={2}>
                    Select
        </Label>
                <Col sm={10}>
                    <Input
                        type="select"
                        id="exampleSelect"
                        name="coverage_decision"
                        onChange={(e) => setTheCoverageDecision(e.target.value)}
                    >
                        <option>choose Coverage Decision</option>
                        <option value={true}>Coverage Confirmed</option>
                        <option value={false}>Coverage Denied</option>
                    </Input>
                </Col>
            </FormGroup>

            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

        


    export default connect(null, { addTransportationCheckList, updateClaim })(
        withRouter(AddTransportationCheckList)
    );