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
    }, props.history.goBack());
  };
  return (
    <div>
      <Row>
    {/* <Container> */}

    {/* <Row>  */}
    <Col sm="8">
      <Card>
      <Form onSubmit={handleSubmit}>

      
          <a href='https://www.google.com' target="_blank">None Owned Vehicle Procdure</a>

        <FormGroup id="form">
          
          {/* <Col sm={{ size: 10 }}> */}
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
          {/* </Col> */}
        </FormGroup>
          <p>Call Doc must cover: </p>
          <Link>* Advise of Coverage Issue</Link>
          <p>* Phone number and name </p>

        <FormGroup id="form">
          <Label for="exampleText" sm={2}>
            
          </Label>
          {/* <Col sm={10}> */}
            <Input
              type="textarea"
              id="exampleText"
              name="call_doc"
              value={theCallDoc}
              onChange={e => setTheCallDoc(e.target.value)}
            />
          {/* </Col> */}
          </FormGroup>
          
        <FormGroup >
          <Label for="checkbox2" >
            Rental Agreement: 
                * Confirm Renter / Driver
                * Additional Insurance CDW / LDW
          </Label>
            
          {/* <Col sm={{ size: 10 }}> */}
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
          {/* </Col> */}
        </FormGroup>
        <FormGroup>
          <Label for="checkbox2" sm={2}>
           
          </Label>
          {/* <Col sm={{ size: 10 }}> */}
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
          {/* </Col> */}
          </FormGroup>
          
          <FormGroup id="form">
            <Label for="exampleText" >
              <p>Call Doc must include: * Who was called * Phone number</p>
            </Label>
            {/* <Col sm={10}> */}
            <Input
              type="textarea"
              id="exampleText"
              name="call_doc"
              value={theClaimantCallDoc}
              onChange={e => setTheClaimantCallDoc(e.target.value)}
            />
            {/* </Col> */}
          </FormGroup>

  
        <FormGroup >
          <Label for="checkbox2" sm={2}>
            Initial Claimant Leter
          </Label>
          {/* <Col sm={{ size: 10 }}> */}
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
          {/* </Col> */}
        </FormGroup>
        <FormGroup >
          <Label for="exampleSelect" sm={2}>
            Select
          </Label>
          {/* <Col sm={10}> */}
            <Input
              type="select"
              id="exampleSelect"
              name="coverage_decision"
              onChange={e => setTheCoverageDecision(e.target.value)}
            >
              <option>choose Coverage Decision</option>
              <option value={true}>Coverage Confirmed</option>
              <option value={false}>Coverage Denied</option>
            </Input>
          {/* </Col> */}
        </FormGroup>

        <FormGroup check >
          {/* <Col sm={{ size: 10, offset: 2 }}> */}
            <Button>Submit</Button>
          {/* </Col> */}
          </FormGroup>
       
        </Form>
      </Card>
        </Col>
      {/* </Row>  */}
      {/* <Row> */}
        {/* <Col sm="4">
          <Card>
            This is a resource card
          </Card>
        </Col> */}
      {/* </Row> */}
    {/* </Container> */}
    <Col sm="4">
      {/* <Container> */}
      <Card>
            <div id="sideNav">
              <h4 id="centerTxt">Helpful Hints</h4>
              <Nav vertical>
                <p id="formContentbullet">  * Script for advising Coverage issue </p>

                <p id="formContenttab">Lor magna aliqua. Laoreet id donec ultrices tincidunt arcu. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Tortor vitae purus faucibus ornare. Egestas egestas"</p>
                <p id="formContenttab">   * Rental Companies Links </p>
                <NavItem id="formContenttab">
                  <Link>Avis</Link>
                </NavItem>
                <NavItem id="formContenttab">
                  <Link>Eenterprise </Link>
                </NavItem>
                <p>*Bill of Sale Daate must be:</p> 
                <NavItem id="formContenttab">
                  <Link >Example Bill Of Sale</Link>
                </NavItem>
                <NavItem>
                  <Link id="formContenttab">Policy Lanauge NOV</Link>
                  <p id="formContenttab">"Lorem ipsum , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec ultrices tincidunt arcu. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Tortor vitae purus faucibus ornare. Egestas ege</p>
                </NavItem>
<p>Q & A</p>
                <p id="formContentbullet">Question: Eget felis eget nunc lobortis mattis aliquam.?</p>
                <p>Answer: Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sollicitudin aliquam ultrices sagittis orci a.</p>
                <p id="formContentbullet">Question: Eget felis eget nunc lobortis mattis aliquam.?</p>
                <p>Answer: Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sollicitudin aliquam ultrices sagittis orci a. Cursus </p>
                <p id="formContentbullet">Question: Eget felis eget nunc lobortis mattis aliquam.?</p>
                <p>Answer: Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sollicitudin aliquam ultrices sagittis orc</p>
                <p id="formContentbullet">Question: Eget felis eget nunc lobortis mattis aliquam.?</p>
                <p>Answer: Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sollicitudin aliquam ultrices sagittis orc.</p>
              </Nav>
            
            </div>
          </Card>
        
        </Col>
      {/* </Container> */}
      </Row>
    </div>

   
  );
};
export default connect(null, { updateCarNotOnPolicyCheckList })(
  withRouter(EditCarNotOnPolicyCheckList)
);
