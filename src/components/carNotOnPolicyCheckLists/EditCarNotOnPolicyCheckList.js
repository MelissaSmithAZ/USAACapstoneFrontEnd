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
  FormText,
  Card,
  Container,
  Row,
  Nav,
  NavItem

} from "reactstrap";
import SideNavForm from "../dashboard/SideNavForm"

const EditCarNotOnPolicyCheckList = props => {
    
  const [singleClaimView, setSingleClaimView] = useState({});
  const [theCallMember, setTheCallMember] = useState(false);
  const [theCallDoc, setTheCallDoc] = useState("");
  const [theRentalAgreement, setTheRentalAgreement] = useState(false);
  const [theClaimantLetter, setTheClaimantLetter] = useState(false);
  const [theClaimantCallDoc, setTheClaimantCallDoc] = useState("");
  const [theFinalLetterMember, setTheFinalLetterMember] = useState(false);
  const [theClaimantCall, setTheClaimantCall] = useState(false);
  const [theCoverageDecision, setTheCoverageDecision] = useState(null);

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
    }, 
      props
    )
  };
  return (
    <div>
      <Row>
 
    <Col sm="8">
      <Card id="editCard">
      <Form onSubmit={handleSubmit}>

      
              <a id="linkFormTxt" href='https://www.google.com' target="_blank">None Owned Vehicle Procdure</a>

        <FormGroup id="form">
          
         
            <FormGroup check id="form">
              <Label check >
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
              <p id="formTxt">Call Doc must cover:  * Advise of Coverage Issue
           * Phone number and name</p>
        

        <FormGroup id="form" row>
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
            Rental Agreement: 
                * Confirm Renter / Driver
                * Additional Insurance CDW / LDW
          </Label>
            
         
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
         
        </FormGroup>
        <FormGroup>
          <Label for="checkbox2" sm={2}>
           
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

          <FormGroup  row id="form">
            <Label for="exampleText" >
            </Label>
           
            <Input
              type="textarea"
                  id="exampleText"
              name="call_doc"
              value={theClaimantCallDoc}
              onChange={e => setTheClaimantCallDoc(e.target.value)}
            />
           
          </FormGroup>

  
        <FormGroup >
          <Label for="checkbox2">
            Initial Claimant Letter
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
                    <Link id="linkFormTxt" >Send Decision Letter</Link>
              </Label>
            </FormGroup>
         
              </FormGroup>
              <p id="formTxt">Once all information received make final decision</p>


              <FormGroup  row>
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

        <FormGroup check >
        
            <Button id="buttonAddEdit">Submit</Button>
         
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
export default connect(null, { updateCarNotOnPolicyCheckList })(
  withRouter(EditCarNotOnPolicyCheckList)
);
