import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import {
  Card,
  Form,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
  Container,
  Alert,
  CardImg,
  CardBody,
  CardSubtitle
} from "reactstrap";

const MemberDenialLetter = props => {
  const [singleClaimView, setSingleClaimView] = useState({});
  const [theTransportationCheckList, setTheTransportationCheckList] = useState(
    {}
  );

  const claims = useSelector(state => state.claims.all);

  const transportationCheckList = useSelector(
    state => state.transportationCheckLists.all
  );

  const [theCarNotOnPolicyCheckList, setTheCarNotOnPolicyCheckList] = useState(
    {}
  );

  const carNotOnPolicyCheckList = useSelector(
    state => state.carNotOnPolicyCheckLists.all
  );

  useEffect(() => {
    setTheCarNotOnPolicyCheckList(
      carNotOnPolicyCheckList.find(
        cl => cl.id === Number(props.match.params.id)
      )
    );
  }, [theCarNotOnPolicyCheckList]);

  useEffect(() => {
    // console.log("useEffect", props.singleClaimView)
    // setSingleClaimView(props.singleClaimView);
    setSingleClaimView(
      claims.find(claim => claim.claim_number === Number(props.match.params.id))
    );
  }, [claims]);

  // useEffect(() => {
  //   // console.log("useEffect", props.singleClaimView)
  //   // setSingleClaimView(props.singleClaimView);
  //   setTheTransportationCheckList(
  //     transportationCheckList.find(
  //       tl => tl.id === Number(props.match.params.id)
  //     ))
  // })

  const handleSubmit = e => {
    e.preventDefault();
    props.history.goBack();
  };
  console.log("***singleClaimView", theCarNotOnPolicyCheckList);
  console.log("***Claim", claims);
  console.log("claim porp", props);
  console.log("THE TRANSPORTATION", theTransportationCheckList);

  return (
    <Form onSubmit={handleSubmit}>
      <Card id="cardLetter">
        <p id="letterAddress">
          March 12, 2020<br></br>
          {theCarNotOnPolicyCheckList &&
            theCarNotOnPolicyCheckList.claim &&
            theCarNotOnPolicyCheckList.claim.member &&
            theCarNotOnPolicyCheckList.claim.member.member_name}
          <br></br>
          {theCarNotOnPolicyCheckList &&
            theCarNotOnPolicyCheckList.claim &&
            theCarNotOnPolicyCheckList.claim.member &&
            theCarNotOnPolicyCheckList.claim.member.address}
          <br></br>Your Vehicle:{" "}
          {theCarNotOnPolicyCheckList &&
            theCarNotOnPolicyCheckList.claim &&
            theCarNotOnPolicyCheckList.claim.member &&
            theCarNotOnPolicyCheckList.claim.member.auto_1}
        </p>

        <h5>Coverage Denial Letter</h5>

        <p id="letterAddress">
          Dear{" "}
          {theCarNotOnPolicyCheckList &&
            theCarNotOnPolicyCheckList.claim &&
            theCarNotOnPolicyCheckList.claim.member &&
            theCarNotOnPolicyCheckList.claim.member.member_name}
        </p>
        <p id="letterAddress">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p id="lastParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p>
          Sincerly Melissa Smith<br></br>Claims Processing
        </p>

        <Button>Submit Letter</Button>
      </Card>
    </Form>
  );
};

export default withRouter(MemberDenialLetter);
