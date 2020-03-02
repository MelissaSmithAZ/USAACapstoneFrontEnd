import React, { useState } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import {
    Container,
    Table,
  CardBody,
  Input,
  Label,
  FormGroup,
  ListGroupItem,
  Row,
  Col
} from "reactstrap";
import Claim from "./Claim"

const ListOfClaims = props => {
    const claims = useSelector(state => state.claims.all);

    console.log("Claims in listofclaims", claims)
    console.log("Claims.number in listofclaims", claims.number)
    // const [query, setQuery] = useState("");
    const claimsList = claims.map(claim => <Claim key={claim.id} claim={claim} />);
    console.log("CONSOL CLAIM#", claims.claim_number);

    return (
      <div>
        {/* <Container> */}
        <Table bordered>
          <thead>
            <tr>
              <th>Claim Number</th>
              <th>Member Name</th>
              <th>Claimant Name</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tr></tr>
        </Table>
        {claimsList}
        {/* </Container> */}
      </div>
    );
}
export default ListOfClaims;