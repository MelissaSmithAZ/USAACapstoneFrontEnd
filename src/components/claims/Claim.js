import React from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  Container,
  CardBody,
  Card,
  Input,
  Label,
  FormGroup,
  Form,
  CardTitle,
  CardImg,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import removeClaim from "../../store/Claims/action";
const Claim = props => {
  // const claims = useSelector(state => state.claims.all);

  // console.log("CONSOL CLAIM#", props.claim[0].claim_number);
  console.log("CONSOL CLAIMS", props.claim);

  return (
      <div class="container">
          
      <table class="table">
        <thead>
                  <tr>

            <th scope="col">Claim #</th>
            <th scope="col">name</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.claim.claim_number}</td>
            <td>{props.claim.member.member_name}</td>
            <td>{props.claim.claimant_name}</td>
            <td>{props.claim.claimant_auto}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Claim;
