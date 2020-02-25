import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateClaim } from "../../store/Claims/action";
import {
  updateCoverageCheckList,
  fetchOneCoverageCheckList,
  fetchAllCoverageCheckLists
} from "../../store/CoverageCheckLists/action";
import { CustomInput, FormGroup, Label, Input, Button, Form } from "reactstrap";
// import { Form } from 'react-bootstrap';

const EditCoverageCheckList = props => {
  //we are retuning an array and we only have one so we want [0]
  const theClaim = useSelector(
    state =>
      state.claims.filter(
        claim => claim.id == props.match.params.claim_number
      )[0]
  );
  const coverageCheckList = theClaim.coverageCheckList;

  const [singleCoverageCheckList, setCoverageCheckList] = useState({});

  console.log("CoverageCheckList", coverageCheckList);

  const handleSubmit = e => {
    e.preventDefault();
    // updateCoverageCheckList(coverageCheckList);
  };

  console.log("CoverageCheckList", props.coverageChecklist);

  function handleEditTransportation(e) {
    const { name, value } = e.target;
    setCoverageCheckList({
      transportation: value
    });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <p>Coverage Check list </p>
        <FormGroup disabled check>
          <Input type="checkbox" name="check" id="exampleCheck" />
          <Label for="exampleCheck" check>
            Limits
          </Label>
        </FormGroup>

        {coverageCheckList && coverageCheckList.carNotOnPolicy ? (
          <Link>Test Owned Vehicle</Link>
        ) : (
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              None Owned Vehicle
            </Label>
          </FormGroup>
        )}
        {coverageCheckList && coverageCheckList.transportation ? (
          <Link>Test transportation</Link>
        ) : (
          <Form.Check
            type={"checkbox"}
            label={"Transportation"}
            onChange={handleEditTransportation}
          />
        )}
        <p>
          {" "}
          <Button>Submit</Button> <Button>Close</Button>
        </p>
      </Form>
    </div>

    //
  );
};

export default connect(null, {
  updateClaim,
  updateCoverageCheckList,
  fetchOneCoverageCheckList,
  fetchAllCoverageCheckLists
})(withRouter(EditCoverageCheckList));
