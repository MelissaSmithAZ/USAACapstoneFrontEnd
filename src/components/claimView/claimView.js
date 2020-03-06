import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { Card, CardTitle, CardText, Button, Row, Col, Container, Alert, CardImg, CardBody, CardSubtitle } from "reactstrap";
import { updateClaim } from "../../store/Claims/action";
import { fetchAllTransportationCheckList } from "../../store/TransportationCheckLists/action";
import { fetchAllCarNotOnPolicyCheckLists } from "../../store/CarNotOnPolicyCheckLists/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faDollarSign } from '@fortawesome/free-solid-svg-icons'

;
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
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  
  const claims = useSelector(state => state.claims.all);

  const transportationCheckList = useSelector(
    state => state.transportationCheckLists.all
  );

  const carNotOnPolicyCheckList = useSelector(
    state => state.carNotOnPolicyCheckLists.all
  );

  useEffect(() => {
    
    setSingleClaimView(
      claims.find(claim => claim.claim_number === Number(props.match.params.id))
    );
  }, [claims]);

  console.log("PROPS", props)
 

  useEffect(() => {
   
    setTheTransportationCheckList(
      transportationCheckList.find(cl => cl.claim.id === singleClaimView.id)
    );
  }, [theTransportationCheckList]);

  useEffect(() => {
   
    setTheCarNotOnPolicyCheckList(
      carNotOnPolicyCheckList.find(cl => cl.claim.id === singleClaimView.id)
    );
  }, [theCarNotOnPolicyCheckList]);


  const renderLinkTransportation = () => {
    if (
      theTransportationCheckList &&
      theTransportationCheckList.claim &&
      singleClaimView
    ) {
      if (theTransportationCheckList.claim.id === singleClaimView.id) {
        return (
          <Link
            id="editClaimLink"
            to={`/editTransportationCheckList/${theTransportationCheckList.id}`}
          >
            Edit RS <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
          </Link>
         
        );
        
      }
    } else {
      return (
        <Link id="addClaimLink" to={`/addTransportationCheckList/${singleClaimView.claim_number}`}>Add RS</Link>
      );
    }
    
  };

  const renderLinkCarNotOnPolicy = () => {

    if (
      theCarNotOnPolicyCheckList &&
      theCarNotOnPolicyCheckList.claim &&
      singleClaimView
    ) {
      if (theCarNotOnPolicyCheckList.claim.id === singleClaimView.id) {
        return (
          <Link id="editClaimLink"
            to={`/editCarNotOnPolicyCheckList/${theCarNotOnPolicyCheckList.id}`}
          >
            Edit NOV <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
          </Link>
      
        );
      }
    }
    else if (theCarNotOnPolicyCheckList && carNotOnPolicyCheckList.claim && singleClaimView) {
      if (theCarNotOnPolicyCheckList.claim.id === singleClaimView.id && theCarNotOnPolicyCheckList.coverage_decision ===  true) {
        return <p>Coverage Extended NOV</p>

      }
    }
    
    else {
      return (
        <Link
          id="addClaimLink"
          to={`/addCarNotOnPolicyCheckList/${singleClaimView.claim_number}`}
        >
          Add NOV{" "}
        </Link>
      );
    }
  };
  
  // const denyCov = = () => {}
  const covNOV = () => {

    //testing to see if there is a carNotOnPolicy or transportation id will than link Add or edit display
    if (
      theCarNotOnPolicyCheckList &&
      theCarNotOnPolicyCheckList.claim &&
      singleClaimView
    ) {
      if (theCarNotOnPolicyCheckList.claim.id === singleClaimView.id) {
        return (
          <Alert color="info">
            I am an alert and I can be dismissed!
    </Alert>

        );
      }
    }
  }

  return (
    <div id="body">
      {covNOV}
      <Container>
        <Row id="cov-card1">
          <Col sm="3">
            <div >
              
                <h5>Claim Task Line</h5>
             
              <Row>
                <Col>{renderLinkTransportation()}</Col>
                <Col>{renderLinkCarNotOnPolicy()}</Col>
                
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm="4">
            <Card id="card" body>
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
              <Button>Edit Member</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card id="card" body>
              <CardTitle>
                <h3>Claimant: </h3>
              </CardTitle>
              <CardText>
                <p>Driver:{singleClaimView && singleClaimView.claimant_name}</p>
                <p>
                  Phone Number:
                  {singleClaimView && singleClaimView.claimant_phone}
                </p>
                <p>
                  Address:{singleClaimView && singleClaimView.claimant_address}
                </p>
                <p>Email:{singleClaimView && singleClaimView.claimant_email}</p>
                <p>
                  Vehicle:{singleClaimView && singleClaimView.claimant_auto}
                </p>
              </CardText>
              <Button>Edit Claimant</Button>
            </Card>
          </Col>

          <Col sm="4">
            <Card id="card" body>
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
               
                <p>
                  Driver: {singleClaimView && singleClaimView.claimant_name}{" "}
                  Rearended{" "}
                </p>
                <p>
                  Insured Driver:
                  {singleClaimView &&
                    singleClaimView.member &&
                    singleClaimView.member.member_name}
                </p>
              </CardText>
              <Button>Edit Liability</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card id="imgCard">
              <CardImg
                top
                width="100%"
                src="data:image/jpeg;base64,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"
                alt="street map location"
              />
              <CardBody>
                {/* <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle> */}
                <CardText>Main St. & 1st</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card id="imgCard">
              <CardImg
                top
                width="100%"
                src="https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fwww.blogcdn.com%2Fwww.engadget.com%2Fmedia%2F2012%2F10%2Fiosstreetviewgmapsjts.jpg&client=amp-blogside-v2&signature=e5c7e249cf72379bb57eed2d3bbebe97744775d5"
                alt="street map location"
              />
              <CardBody>
                {/* <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle> */}
                <CardText>Main St. & 1st</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card id="imgCard">
              <CardImg
                top
                width="100%"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnPpqmP_ILcrCON7OsWWgsTRd06db8mtuNyEe_X48sKaCCDJSp"
                alt="Card image cap"
              />
              <CardBody>
                {/* <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle> */}
                <CardText>Main St. & 1st</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
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
