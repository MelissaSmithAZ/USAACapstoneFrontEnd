import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap";
import { updateClaim } from "../../store/Claims/action";

const ClaimView = props => {
  // const claims = useSelector(state => state.claims.all);
  //getter setter
  const [singleClaimView, setSingleClaimView] = useState({})

  // const buttonAddCoverageCheckList = (
  //   <Button
  //     onClick={handleSubmit}
  //   > Add Coverage Check List</Button>
  // )
  //  const buttonEditCoverageCheckList = (
  //   <Button
  //     onClick={handleSubmit}
  //   > Edit Coverage Check List</Button>
  // )
  //   member_name: "",
  //   phone: "",
  //   address: "",
  //   email: "",
  //   auto_1: "",
  //   bi_coverage: 0,
  //   collision_coverage: 0,
  //   pd_coverage: 0,
  //   claimant_name: "",
  //   claimant_phone: "",
  //   claimant_address: "",
  //   claimant_email: "",
  //   claimant_auto: ""
  // });
  const claims = useSelector(state => state.claims.all);
  // let singleClaimView;
  console.log("CLAIMS", claims)
  console.log("SINGLE CLAIM", singleClaimView);
  
  useEffect(() => {
    // console.log("useEffect", props.singleClaimView)
    // setSingleClaimView(props.singleClaimView);
    setSingleClaimView(claims.find(claim => claim.claim_number === Number(props.match.params.id)))
  }, [claims]);
  
  console.log("SINGLE", props.singleClaimView);
  
  return (
    <div>
      <Row id="cov-card1">
        <Col sm={6}>
          <Card>
            <CardTitle>
              <h5>Claim Task Line</h5>
            </CardTitle>

            {(singleClaimView && singleClaimView.coverageCheckList == null) ||
            false ? (
              <Link to={"/addCoverageChecklist"}>
                {" "}
                <Button>
                  Research Coverage
                </Button>{" "}
               </Link>
            ) : (
              <Link to={"/editCoverageChecklist/:id"}>
                <Button >
                  Update Research Coverage
                </Button>
              </Link>
            )}
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

export default withRouter(connect(mapStateToProps, { updateClaim })(ClaimView));
