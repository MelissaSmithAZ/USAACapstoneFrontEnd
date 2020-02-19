import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import {
  Container,
  CardBody,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import ListOfClaims from "../claims/ListOfClaims"

const ClaimView = props => {
    const claims = useSelector(state => state.claims.all);

    //getter setter
    const [singleClaim, setSingleClaim] = useState({
        member_name: "",
        member_phone: "",
        member_address: "",
        member_email: "",




    });

    useEffect(() => {
        setSingleClaim();
    }, []);
console.log("CLAIMS in ClaimView", claims)
    

    return (
      <div>
        <Row id="cov-card1">
          <Col sm={6}>
            <Card>
              <CardTitle>
                <h5>Claim Task Line</h5>
              </CardTitle>
               <Button>Research Coverage</Button>
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
                <p>Insured Driver:{claims.member_name}</p>
                <p>Member Number:{claims.phone}</p>
                <p>Member Address:{claims.member_address}</p>
                <p>Member Address:{claims.email}</p>
                <p>Insureds Vehicle:{claims.auto_1}</p>
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
                <p>Insured Driver:{claims.claimant_name}</p>
                <p>Member Number:{claims.claimant_phone}</p>
                <p>Member Address:{claims.claimant_address}</p>
                <p>Member Address:{claims.claimant_email}</p>
                <p>Insureds Vehicle:{claims.claimant_auto}</p>
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
                <p>Bodily Injury:{claims.bi_coverage}</p>
                <p>Collision:{claims.collision_coverage}</p>
                <p>Property Damage:{claims.pd_coverage}</p>
              </CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );

}

export default ClaimView;
