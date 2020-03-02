import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { Card, CardTitle, CardText, Button, Row, Col } from "reactstrap";
import { updateClaim } from "../../store/Claims/action";
import { fetchAllTransportationCheckList } from "../../store/TransportationCheckLists/action";
import { fetchAllCarNotOnPolicyCheckLists } from "../../store/CarNotOnPolicyCheckLists/action";

const ClaimView = props => {
  // const claims = useSelector(state => state.claims.all);
  //getter setter
  const [singleClaimView, setSingleClaimView] = useState({});

  const [theTransportationCheckList, setTheTransportationCheckList] = useState(
    {}
  );
  const [theCarNotOnPolicyCheckList, setTheCarNotOnPolicyCheckList] = useState(
    {}
  );

  const claims = useSelector(state => state.claims.all);

  const transportationCheckList = useSelector(
    state => state.transportationCheckLists.all
  );

  const carNotOnPolicyCheckList = useSelector(
    state => state.carNotOnPolicyCheckLists.all
  );

  // console.log("CLAIMS", claims);

  useEffect(() => {
    // console.log("useEffect", props.singleClaimView)
    // setSingleClaimView(props.singleClaimView);
    setSingleClaimView(
      claims.find(claim => claim.claim_number === Number(props.match.params.id))
    );
  }, [claims]);

  console.log("PROPS", props)
  // console.log("SINGLE CLAIM******", singleClaimView);

  useEffect(() => {
    // console.log("useEffect", props.singleClaimView)
    // setSingleClaimView(props.singleClaimView);
    setTheTransportationCheckList(
      transportationCheckList.find(cl => cl.claim.id === singleClaimView.id)
    );
  }, [theTransportationCheckList]);

  useEffect(() => {
    // console.log("useEffect", props.singleClaimView)
    // setSingleClaimView(props.singleClaimView);
    setTheCarNotOnPolicyCheckList(
      carNotOnPolicyCheckList.find(cl => cl.claim.id === singleClaimView.id)
    );
  }, [theCarNotOnPolicyCheckList]);

  // const LinkTransporationEdit = (transportationCheckList.claim === singleClaimView.id)

  const renderLinkTransportation = () => {
    // console.log(theTransportationCheckList, "|||", singleClaimView);
    if (
      theTransportationCheckList &&
      theTransportationCheckList.claim &&
      singleClaimView
    ) {
      if (theTransportationCheckList.claim.id === singleClaimView.id) {
        return (
          <Link to={`/editTransportationCheckList/${theTransportationCheckList.id}`}>Edit Transportation</Link>
        )
              // <Link to={`/claims/${props.claim.claim_number}`}><th scope="row">
      }
    } else {
      return (
        <Link to={`/addTransportationCheckList/${singleClaimView.claim_number}`}>add Transportation</Link>
      );
    }
    
  };

  const renderLinkCarNotOnPolicy = () => {
    // console.log(theCarNotOnPolicyCheckList, "|||", singleClaimView);
    if (
      theCarNotOnPolicyCheckList &&
      theCarNotOnPolicyCheckList.claim &&
      singleClaimView
    ) {
      if (theCarNotOnPolicyCheckList.claim.id === singleClaimView.id) {
        return (
          <Link to={`/editCarNotOnPolicyCheckList/${theCarNotOnPolicyCheckList.id}`}>Edit NOV</Link>
        )
      }
    } else {
      return (
        <Link to={`/addCarNotOnPolicyCheckList/${singleClaimView.claim_number}`}>add NOV</Link>
      );
    }
  };

  return (
    <div>
      <Row id="cov-card1">
        <Col sm={6}>
          <Card>
            <CardTitle>
              <h5>Claim Task Line</h5>
            </CardTitle>

            {renderLinkTransportation()}
            {renderLinkCarNotOnPolicy()}

            
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>
              <h3>Insured: </h3>
            </CardTitle>
            <CardText>
              <p>
                Insured Driver:
                {singleClaimView &&
                  singleClaimView.member &&
                  singleClaimView.member.member_name}
              </p>
              <p>
                Phone Number:{" "}
                {singleClaimView &&
                  singleClaimView.member &&
                  singleClaimView.member.phone}
              </p>
              <p>
                Address:{" "}
                {singleClaimView &&
                  singleClaimView.member &&
                  singleClaimView.member.address}
              </p>
              <p>
                Email:{" "}
                {singleClaimView &&
                  singleClaimView.member &&
                  singleClaimView.member.email}
              </p>
              <p>
                Vehicle:{" "}
                {singleClaimView &&
                  singleClaimView.member &&
                  singleClaimView.member.auto_1}
              </p>
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>
              <h3>Claimant: </h3>
            </CardTitle>
            <CardText>
              <p>Driver:{singleClaimView && singleClaimView.claimant_name}</p>
              <p>
                Phone Number:{singleClaimView && singleClaimView.claimant_phone}
              </p>
              <p>
                Address:{singleClaimView && singleClaimView.claimant_address}
              </p>
              <p>Email:{singleClaimView && singleClaimView.claimant_email}</p>
              <p>Vehicle:{singleClaimView && singleClaimView.claimant_auto}</p>
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>

      <Row id="cov-card">
        <Col sm={10}>
          <Card id="cov-card">
            <CardTitle>
              <h3>Coverages</h3>
            </CardTitle>
            <CardText>
              <p>
                Bodily Injury: $
                {singleClaimView &&
                  singleClaimView.member &&
                  singleClaimView.member.bi_coverage}
              </p>
              <p>
                Collision: $
                {singleClaimView &&
                  singleClaimView.member &&
                  singleClaimView.member.collision_coverage}
              </p>
              <p>
                Property Damage: $
                {singleClaimView &&
                  singleClaimView.member &&
                  singleClaimView.member.pd_coverage}
              </p>
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  // console.log("here", state);
  // return {
  //   singleClaimView: state.claims.all.find(claim => claim.claim_number === Number(props.match.params.claim_number))
  // };
};

export default withRouter(
  connect(mapStateToProps, { updateClaim, fetchAllTransportationCheckList, fetchAllCarNotOnPolicyCheckLists })(
    ClaimView
  )
);
