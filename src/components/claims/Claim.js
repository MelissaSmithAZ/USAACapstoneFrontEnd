import React from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { Table, Col,Row, Container } from "reactstrap";
import removeClaim from "../../store/Claims/action";
const Claim = props => {
  // const claims = useSelector(state => state.claims.all);

  // console.log("CONSOL CLAIM#", props.claim[0].claim_number);
  console.log("CONSOL CLAIMS", props.claim);

  return (
    // <Container>
      <div>
        <Table striped>
          {/* <thead>
        <tr >

            <th class="Col-3">Claim Number</th>
            <th>name</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead> */}
          <tbody>
            <tr>
              <Link to={`/claims/${props.claim.claim_number}`}><th scope="row">{props.claim.claim_number}</th></Link>
              <td>{props.claim.member.member_name}</td>
              <td>{props.claim.claimant_name}</td>
              <td>{props.claim.claimant_auto}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    // </Container>
  );
};
export default Claim;
