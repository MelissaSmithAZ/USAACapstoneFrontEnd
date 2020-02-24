import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateClaim } from "../../store/Claims/action";
import { updateCoverageCheckList } from "../../store/CoverageCheckLists/action";
import { CustomInput, FormGroup, Label, Input, Button, Form } from "reactstrap";
// import { Form } from 'react-bootstrap';

const EditCoverageCheckList = props => {
  const [singleClaimView, setSingleClaimView] = useState({});
  //   const [name, setName] = useState()

  const claims = useSelector(state => state.claims.all);

  useEffect(() => {
    // console.log("useEffect", props.singleClaimView)
    // setSingleClaimView(props.singleClaimView);
    setSingleClaimView(
      claims.find(claim => claim.claim_number === Number(props.match.params.id))
    );
  }, [claims]);
  console.log("**coverage**", claims);
  console.log("**coverage singleClaim**", singleClaimView);
  const handleSubmit = e => {
    e.preventDefault();
    props.updateCoverageCheckList(singleClaimView);
  };
  function handleEditTransportation(e) {
    const { name, value } = e.target;
    setSingleClaimView({
      ...singleClaimView,
      coverageCheckList: {
        ...singleClaimView.coverageCheckList,
        transportation: value
      }
    });
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup disabled check>
          <Input type="checkbox" name="check" id="exampleCheck" />
          <Label for="exampleCheck" check>
            Limits
          </Label>
        </FormGroup>

        {singleClaimView &&
        singleClaimView.coverageCheckList &&
        singleClaimView.coverageCheckList.carNotOnPolicy ? (
          <Link>Test Owned Vehicle</Link>
        ) : (
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              None Owned Vehicle
            </Label>
          </FormGroup>
        )}
        <FormGroup check>
          <Input
            type="checkbox"
            // checked={
            //   singleClaimView &&
            //   singleClaimView.coverageCheckList &&
            //   singleClaimView.coverageCheckList.transportation === true
            // }
                      
            // value={checked}
            name="transportation"
            onChange={handleEditTransportation}
          />
          <Label for="transportation" check>
            Transportation
          </Label>
        </FormGroup>

        {/* <Form.Check disabled type={"checkbox"} label={"Limits"} />

        {singleClaimView &&
        singleClaimView.coverageCheckList &&
        singleClaimView.coverageCheckList.carNotOnPolicy ? (
          <Link>Test Owned Vehicle</Link>
        ) : (
          <Form.Check type={"checkbox"} label={"None Owned Vehicle"} />
        )}

        {singleClaimView &&
        singleClaimView.coverageCheckList &&
        singleClaimView.coverageCheckList.transportation ? (
          <Link>Test transportation Vehicle</Link>
        ) : (
          <Form.Check
            type={"checkbox"}
            label={"Transportation"}
            onChange={handleEditTransportation}
          />
        )} */}

        {/* {singleClaimView && */}

        {/* singleClaimView.coverageCheckList &&
        singleClaimView.coverageCheckList.carNotOnPolicy ? (
         <Link>Test Owned Vehicle</Link>
        ) : (
        <Input */}
        {/* type="checkbox"
        id="exampleCustomCheckbox2"
        label="None Owned Vehicle"
         value={ */}
        {/* singleClaimView &&
        singleClaimView.coverageCheckList &&
        singleClaimView.coverageCheckList.carNotOnPolicy
        }
              onChange={handleEdit}
        /> */}

        {/* <Input
            type="checkbox"
            id="exampleCustomCheckbox3"
            label="Transportation Exclusion"
            name=""
            value={
              singleClaimView &&
              singleClaimView.coverageCheckList &&
              singleClaimView.coverageCheckList.transportation
            }
            onChange={handleEditTransportation}
          /> */}
        {/* </FormGroup> */}
        <p>
          {" "}
          <Button>Submit</Button> <Button>Close</Button>
        </p>
      </Form>
    </div>

    //
  );
};

export default connect(null, { updateClaim, updateCoverageCheckList })(
  withRouter(EditCoverageCheckList)
);
