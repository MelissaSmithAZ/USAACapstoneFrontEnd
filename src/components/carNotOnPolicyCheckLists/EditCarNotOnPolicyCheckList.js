import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateCarNotOnPolicyCheckList } from "../../store/CarNotOnPolicyCheckLists/action";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const EditCarNotOnPolicyCheckList = props => {
    
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
    {});

  const carNotOnPolicyCheckList = useSelector(
    state => state.carNotOnPolicyCheckLists.all
  );
  console.log("**CarNotOnPolicy", carNotOnPolicyCheckList)

  useEffect(() => {
    setTheCarNotOnPolicyCheckList(
      carNotOnPolicyCheckList.find(
        cl => cl.id === Number(props.match.params.id)
      ),
      setTheCallMember(theCarNotOnPolicyCheckList.call_member),
      setTheCallDoc(theCarNotOnPolicyCheckList.call_doc),
      setTheRentalAgreement(theCarNotOnPolicyCheckList.rental_agreement),
      setTheClaimantLetter(theCarNotOnPolicyCheckList.claimant_letter),
      setTheClaimantCall(theCarNotOnPolicyCheckList.claimant_call),
      setTheClaimantCallDoc(theCarNotOnPolicyCheckList.claimant_call_doc),
      setTheFinalLetterMember(theCarNotOnPolicyCheckList.final_letterMember),
      setTheCoverageDecision(theCarNotOnPolicyCheckList.coverage_decision)
    );
  }, [theCarNotOnPolicyCheckList]);
      
      
      
  console.log("*****CALL MEMBER TEST", theCarNotOnPolicyCheckList)
  console.log("*****CALL MEMBER TEST", props)
  const handleSubmit = e => {
    e.preventDefault();
    props.updateCarNotOnPolicyCheckList({
      id: theCarNotOnPolicyCheckList.id,
      call_member: theCallMember,
      call_doc: theCallDoc,
      rental_agreement: theRentalAgreement,
      claimant_letter: theClaimantLetter,
      claimant_call: theClaimantCall,
      claimant_call_doc: theClaimantCallDoc,
      final_letterMember: theFinalLetterMember,
      coverage_decision: theCoverageDecision,
      claim_id: theCarNotOnPolicyCheckList.claim.id
    }, props.history.push('/'));
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
                name="call_member"
                checked={theCallMember}
                onChange={() => setTheCallMember(!theCallMember)}
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
          Rental Agreement
        </Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="checkbox2"
                name="rental_agreement"
                onChange={() => setTheRentalAgreement(!theRentalAgreement)}
                checked={theRentalAgreement}
              />{" "}
              Rental Agreement
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
      <FormGroup row>
        <Label for="checkbox2" sm={2}>
          Claimant Call Doc 
        </Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="checkbox2"
                name="claimant_call"
                onChange={() => setTheClaimantCallDoc(!theClaimantCallDoc)}
                checked={theClaimantCallDoc}
              />{" "}
              Doc claimant call 
            </Label>
          </FormGroup>
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
                checked={theFinalLetterMember}
                onChange={() => setTheFinalLetterMember(!theFinalLetterMember)}
              />{" "}
              <Link>Send Decision Letter</Link>
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
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
export default connect(null, { updateCarNotOnPolicyCheckList })(
  withRouter(EditCarNotOnPolicyCheckList)
);
