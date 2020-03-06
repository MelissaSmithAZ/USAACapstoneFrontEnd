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
  Card,
  Row,
  
}from "reactstrap";
import SideNavForm from "../dashboard/SideNavForm";

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
  const [theCarNotOnPolicyCheckList, setTheCarNotOnPolicyCheckList] = useState(
    {}
  );

  const claims = useSelector(state => state.claims.all);

  useEffect(() => {
    // console.log("useEffect", props.singleClaimView)
    // setSingleClaimView(props.singleClaimView);
    setSingleClaimView(
      claims.find(claim => claim.claim_number === Number(props.match.params.id))
    );
  }, [claims]);

  console.log("SINGLEClaim porp", singleClaimView.id);
  console.log("claim porp", claims);
  console.log("claim porp", props);
  // console.log("TheCARNOT ON", theCarNotOnPolicyCheckList.id)

  const handleSubmit = e => {
    e.preventDefault();
    props.addCarNotOnPolicyCheckList(
      {
        // id: theCarNotOnPolicyCheckList.id,
        call_member: theCallMember,
        call_doc: theCallDoc,
        rental_agreement: theRentalAgreement,
        claimant_letter: theClaimantLetter,
        claimant_call: theClaimantCall,
        claimant_call_doc: theClaimantCallDoc,
        final_letterMember: theFinalLetterMember,
        coverage_decision: theCoverageDecision,
        // claim_id: theCarNotOnPolicyCheckList.claim.id
        claim_id: singleClaimView.id
      },
      props.history.goBack()
    );
  };

  return (
    <div>
      <Row>
        <Col sm="8">
          <Card id="editCard">
            <Form onSubmit={handleSubmit}>
              <a href="https://www.google.com" target="_blank">
                None Owned Vehicle Procdure
              </a>

              <FormGroup id="form">
                <FormGroup check id="form">
                  <Label check>
                    <Input
                      type="checkbox"
                      id="checkbox2"
                      name="call_member"
                      checked={theCallMember}
                      onChange={() => setTheCallMember(!theCallMember)}
                    />{" "}
                    Member Called
                  </Label>
                </FormGroup>
              </FormGroup>
              <p>Call Doc must cover: </p>
              <Link>* Advise of Coverage Issue</Link>
              <p>* Phone number and name </p>

              <FormGroup id="form">
                <Label for="exampleText" sm={2}></Label>

                <Input
                  type="textarea"
                  id="exampleText"
                  name="call_doc"
                  value={theCallDoc}
                  onChange={e => setTheCallDoc(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="checkbox2">
                  Rental Agreement: * Confirm Renter / Driver * Additional
                  Insurance CDW / LDW
                </Label>

                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      id="checkbox2"
                      name="rental_agreement"
                      onChange={() =>
                        setTheRentalAgreement(!theRentalAgreement)
                      }
                      checked={theRentalAgreement}
                    />{" "}
                    Rental Agreement
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="checkbox2" sm={2}></Label>

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

              <FormGroup id="form">
                <Label for="exampleText">
                  <p>Call Doc must include: * Who was called * Phone number</p>
                </Label>

                <Input
                  type="textarea"
                  id="exampleText"
                  name="call_doc"
                  value={theClaimantCallDoc}
                  onChange={e => setTheClaimantCallDoc(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="checkbox2" sm={2}>
                  Initial Claimant Leter
                </Label>

                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      id="checkbox2"
                      name="claimant_letter"
                      checked={theFinalLetterMember}
                      onChange={() =>
                        setTheFinalLetterMember(!theFinalLetterMember)
                      }
                    />{" "}
                    <Link>Send Decision Letter</Link>
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect" sm={2}>
                  Select
                </Label>

                <Input
                  type="select"
                  id="exampleText"
                  name="coverage_decision"
                  onChange={e => setTheCoverageDecision(e.target.value)}
                >
                  <option id="exampleText">choose Coverage Decision</option>
                  <option id="exampleText" value={true}>
                    Coverage Confirmed
                  </option>
                  <option id="exampleText" value={false}>
                    Coverage Denied
                  </option>
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

export default connect(null, { addCarNotOnPolicyCheckList })(
  withRouter(AddCarNotOnPolicyCheckList)
);
