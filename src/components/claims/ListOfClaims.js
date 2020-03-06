import React, { useState } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { removeClaim } from "../../store/Claims/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


import {
    Container,
  Table,
    Button,
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
  const claimsList = claims.map(claim => (
    <tr>
      <Link id="claimLink"to={`/claims/${claim.claim_number}`}>
        <th scope="row">{claim.claim_number}</th>
      </Link>
      <td id="tdata">{claim.member.member_name}</td>
      <td id="tdata">{claim.claimant_name}</td>
      <td id="tdata"  >{claim.claimant_auto}</td>
      <td>
        <Button
          id="btn"
          type="submit"
          onClick={() => props.removeClaim(claim.id)}
          size="xs"
        >
         <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>{" "}
        </Button>
      </td>
    </tr>
  ));
    console.log("CONSOL CLAIM#", claims.claim_number);
//  const handleRemove = e => {
//     props.removeClaim(claim.id)
//   }
    return (
      <div id="listBackground">
        <Container id='claimsList'>
        <Table striped hover >
          <thead >
              <tr>
              <th >Claim Number</th>
              <th>Member Name</th>
              <th>Claimant Name</th>
              <th>Handle</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody >
            
            {claimsList}
            {/* <tr>
              <Link to={`/claims/${props.claim.claim_number}`}><th scope="row">{props.claim.claim_number}</th></Link>
              <td>{props.claim.member.member_name}</td>
              <td>{props.claim.claimant_name}</td>
              <td>{props.claim.claimant_auto}</td>
              <td><Button type="submit" onClick={handleRemove} size="xs">Delete</Button></td>
            </tr>
             */}
          </tbody>
          
        </Table>
       
        </Container>
      </div>
    );
}
export default connect(null, { removeClaim })(withRouter(ListOfClaims))