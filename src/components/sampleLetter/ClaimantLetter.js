import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import {
    Card,
    Form,
    CardTitle,
    CardText,
    Button,
    Row,
    Col,
    Container,
    Alert,
    CardImg,
    CardBody,
    CardSubtitle
} from "reactstrap";

const ClaimantLetter = props => {
    const [singleClaimView, setSingleClaimView] = useState({});
    const claims = useSelector(state => state.claims.all);

    useEffect(() => {
        // console.log("useEffect", props.singleClaimView)
        // setSingleClaimView(props.singleClaimView);
        setSingleClaimView(
            claims.find(claim => claim.claim_number === Number(props.match.params.id))
        );
    }, [claims]);

    const handleSubmit = e => {
        e.preventDefault();
        props.history.goBack()
    }
    console.log("***singleClaimView", singleClaimView);
    console.log("***Claim", claims);
    console.log("claim porp", props);

    return (

        <Form onSubmit={handleSubmit}>

            <Card id="cardLetter">
                <p id="letterAddress">
                    March 12, 2020<br></br>
                    {singleClaimView &&
                        
                        singleClaimView.claimant_name}
                    <br></br>
                    {singleClaimView &&
                        singleClaimView &&
                        singleClaimView.claimant_address}<br></br>Your Vehicle: {" "}{singleClaimView &&
                            singleClaimView.claimant_auto}
                </p>

                <h5>Coverage Investigation</h5>

                <p id="letterAddress">Dear {" "} {singleClaimView &&
                
                    singleClaimView.claimant_name}</p>
                <p id="letterAddress"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p id="lastParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


                <p>Sincerly Melissa Smith<br></br>Claims Processing</p>

                <Button>Submit Letter</Button>
            </Card>
        </Form>

    );
};

export default withRouter(ClaimantLetter);