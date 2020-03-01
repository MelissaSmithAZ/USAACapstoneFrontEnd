import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateCarNotOnPolicyCkList } from "../../store/CarNotOnPolicyCheckLists/action";
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
    {}
  );

  const carNotOnPolicyCheckList = useSelector(
    state => state.carNotOnPolicyCheckLists.all
  );

  useEffect(() => {
    setTheCarNotOnPolicyCheckList(
      carNotOnPolicyCheckList.find(
        ck => ck.id === Number(props.match.params.id)
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

  const handleSubmit = e => {
    e.prevmentDefault();
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
    });
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
    </Form>
  );
};
export default connect(null, { updateCarNotOnPolicyCkList })(
  withRouter(EditCarNotOnPolicyCheckList)
);
