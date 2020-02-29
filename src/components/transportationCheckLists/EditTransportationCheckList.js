import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { updateTransportationCheckList } from "../../store/TransportationCheckLists/action";
import { match } from "assert";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const EditTransportationCheckList = props => {
  const [singleClaimView, setSingleClaimView] = useState({});

  const [theTransportationCheckList, setTheTransportationCheckList] = useState(
      {
          call: false,
          call_doc: "",
          letter: false,
          claimant_letter: false,
          claimant_call: false,
          claimant_call_doc: "",
          coverage_decision: false,
          claim_id: 0
    }
  );


  const transportationCheckList = useSelector(
    state => state.transportationCheckLists.all
  );

  useEffect(() => {
    // console.log("useEffect", props.singleClaimView)
    // setSingleClaimView(props.singleClaimView);
    setTheTransportationCheckList(
      transportationCheckList.find(
        tl => tl.id === Number(props.match.params.id)
        )
    );
  }, [theTransportationCheckList]);

  console.log("THE TRANSPORTATION", theTransportationCheckList);
  console.log("PROPS", props);

  const handleSubmit = e => {
    e.preventDefault();
    props.updateTransportationCheckList(theTransportationCheckList);
  };
  function handleChange(e) {
      const { name, value } = e.target;
      
      setTheTransportationCheckList({
          ...theTransportationCheckList,
      [name]: value
    });
  }
        return (

            <Form onSubmit={handleSubmit}>
                <p>summary of items needed and link to resource</p>
                <FormGroup row>
                    <Label for="checkbox2" sm={2}>
                        Member Called
        </Label>
                    <Col sm={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" name="call" onChange={handleChange} /> Member Called
            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <p>Call Doc must cover: x,y,z</p>

                <FormGroup row>
                    <Label for="exampleText" sm={2}>
                        Member Call Doc
        </Label>
                    <Col sm={10}>
                        <Input type="textarea" id="exampleText" name="call_doc" onChange={handleChange} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="checkbox2" sm={2}>
                        Initial Member Leter
        </Label>
                    <Col sm={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" name="letter" onChange={handleChange} />{" "}
                                <Link>Send Member Leter</Link>
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="checkbox2" sm={2}>
                        Claimant Called
        </Label>
                    <Col sm={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" name="claimant_call" onChange={handleChange} checked={ theTransportationCheckList &&theTransportationCheckList.claimant_call} /> Claimant Called
            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <p>Call Doc must cover: x,y,z</p>

                <FormGroup row>
                    <Label for="exampleText" sm={2}>
                        Claimat Call Doc
        </Label>
                    <Col sm={10}>
                        <Input type="textarea" id="exampleText" name="claimant_call_doc" onChange={handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="checkbox2" sm={2}>
                        Initial Claimant Leter
        </Label>
                    <Col sm={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" name="claimant_letter" onChange={handleChange}  />{" "}
                                <Link>Send Claimant Leter</Link>
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>

                <p>Once all information received make final decision</p>

                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>
                        Select
        </Label>
                    <Col sm={10}>
                        <Input type="select" id="exampleSelect" name="coverage_decision" onChange={handleChange}>
                            <option value={true}>Coverage Confirmed</option>
                            <option value={false}>Coverage Denied</option>
                        </Input>
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
 
    };
    
export default connect(null, { updateTransportationCheckList })(
  withRouter(EditTransportationCheckList)
);
