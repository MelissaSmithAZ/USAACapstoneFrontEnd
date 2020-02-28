// import React, { useState, useEffect } from "react";
// import { withRouter, Link, NavLink } from "react-router-dom";
// import { connect, useSelector, useDispatch } from "react-redux";
// import { updateClaim } from "../../store/Claims/action";
// import {
//   updateCoverageCheckList,
//   fetchOneCoverageCheckList,
//   fetchAllCoverageCheckLists
// } from "../../store/CoverageCheckLists/action";
// import { CustomInput, FormGroup, Label, Input, Button, Form } from "reactstrap";
// // import { Form } from 'react-bootstrap';

// const EditCoverageCheckList = props => {
//   const [coverageCheckList, setCoverageCheckList] = useState({});

//   //we are retuning an array and we only have one so we want [0]
//   // const [singleClaimView, setSingleClaimView] = useState({})
//   const claims = useSelector(state => state.claims.all);

import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
// import ReactDOM from "react-dom";
// import { ModalProvider } from "react-modal-hook";
// import keyMirror from "keymirror";
import { updateClaim } from "../../store/Claims/action";
import { updateCoverageCheckList } from "../../store/CoverageCheckLists/action";
import { CustomInput, FormGroup, Label, Input, Button } from "reactstrap";
import { Form } from "react-bootstrap";

const EditCoverageCheckList = props => {
  // const dispatch = useDispatch()
  // const [theClaim, setTheClaim] = useState({
  //   coverageCheckList: {}
  // });
  // const [transportationIsIssue, setTransportationIsIssue] = useState();
  // const [carNotOnPolicyIsIssue, setcarNotOnPolicyIsIssue] = useState();

  //   const [name, setName] = useState()
    const transportationCheckList = useSelector(state => state.transportationCheckList.all)
  const carNotOnPolicyCheckList = useSelector(state => state.transportationCheckList.all)
  const claims = useSelector(state => state.claims.all);

  // useEffect(() => {
  // const  theClaim =(
  //     claims.find(claim => claim.claim_number === Number(props.match.params.id))
  //   );
  // }, [claims]);

  // useEffect(() => {
  //   console.log("SCV: ", singleClaimView)
  //   setTransportationIsIssue(singleClaimView.coverageCheckList.transportation);
  //   setcarNotOnPolicyIsIssue(singleClaimView.coverageCheckList.carNotOnPolicy);
  // }, [singleClaimView]);

  // setCheckList(singleClaimView.coverageCheckList);
  // console.log("**coverage**", claims);
  // console.log("claim*****", singleClaimView);
  // console.log("Transporation", transportationIsIssue);
  // console.log("policy", carNotOnPolicyIsIssue);

  function handleEdit(e) {
    e.preventDefault();

    // const { name, value } = e.target;

    // props.updateCoverageCheckList({
    //   id: singleClaimView.coverageCheckList.id,
    //   transportation: transportationIsIssue,
    //   limits: false,
    //   carNotOnPolicy: carNotOnPolicyIsIssue,
    //   ror: false,
    //   claim: null
    // });

    // const change
    // setCheckList({
    //   transportation: transportationIsIssue,

    // });

    // setCheckList({
    //   carNotOnPolicy: carNotOnPolicyIsIssue,
    // });
  }

  // if (singleClaimView && singleClaimView.coverageCheckList) {
    return (
      <div>
        {/* <Form onSubmit={handleEdit}>
          <Form.Check
            disabled
            type={"checkbox"}
            name={"limits"}
            label={"Limits"}
          />

          {
            carNotOnPolicyIsIssue ? (
              <Link>Test Owned Vehicle</Link>
            ) : ( */}
        {/* //       <Form.Check */}
        
          {/* //         type="checkbox"
          //         label="None Owned Vehicle"
          //         onChange={e => setcarNotOnPolicyIsIssue(e.target.value)}
          //         value={carNotOnPolicyIsIssue}
          //       />
          //     )}

          // { */}
            {/* // transportationIsIssue ? (
            //   <Link>Test transportation Vehicle</Link>
            // ) : (
            //     <Form.Check */}
            {/* //       type="checkbox"
            //       label={"transportation"}
            //       onChange={e => setTransportationIsIssue(e.target.value)}
            //       value={transportationIsIssue}
            //     />
            //   )} */}

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
          {/* <p>
            {" "}
            <Button>Submit</Button> <Button>Close</Button>
          </p>
        </Form> */}
      </div>

      //
    );
  // } else {
  //   return <div>Loading...</div>
  // }
  
};
//connect takes two arguments mapstatetoprops and mapdispatchtoprops if no mapstate than null mapdispatch allows you to bind to the dispatch  method
export default connect(null, { updateClaim, updateCoverageCheckList })(
  withRouter(EditCoverageCheckList)
);

//   useEffect(() => {
//     setCoverageCheckList(claims.find(claim => claim.claim_number === Number(props.match.params.id)))
//   }, [claims]);

//   // const theClaim = useSelector(
//   //   state =>
//   //     state.claims.filter(
//   //       claim => claim.claim_number === Number(props.match.params.id)[0]))
//   // const coverageCheckList = theClaim.coverageCheckList;

// console.log("type of Claim", typeof(claims))
//   // console.log("CoverageCheckList", coverageCheckList);

//   const handleSubmit = e => {
//     e.preventDefault();
//     // updateCoverageCheckList(coverageCheckList);
//   };

//   console.log("CoverageCheckList", props.coverageChecklist);

//   function handleEditTransportation(e) {
//     const { name, value } = e.target;
//     setCoverageCheckList({
//       transportation: value
//     });
//   }

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <p>Coverage Check list </p>
//         <FormGroup disabled check>
//           <Input type="checkbox" name="check" id="exampleCheck" />
//           <Label for="exampleCheck" check>
//             Limits
//           </Label>
//         </FormGroup>

//         {coverageCheckList && coverageCheckList.carNotOnPolicy ? (
//           <Link>Test Owned Vehicle</Link>
//         ) : (
//           <FormGroup check>
//             <Input type="checkbox" name="check" id="exampleCheck" />
//             <Label for="exampleCheck" check>
//               None Owned Vehicle
//             </Label>
//           </FormGroup>
//         )}
//         {coverageCheckList && coverageCheckList.transportation ? (
//           <Link>Test transportation</Link>
//         ) : (
//           <Form.Check
//             type={"checkbox"}
//             label={"Transportation"}
//             onChange={handleEditTransportation}
//           />
//         )}
//         <p>
//           {" "}
//           <Button>Submit</Button> <Button>Close</Button>
//         </p>
//       </Form>
//     </div>

//     //
//   );
// };

// export default connect(null, {
//   updateClaim,
//   updateCoverageCheckList,
//   fetchOneCoverageCheckList,
//   fetchAllCoverageCheckLists
// })(withRouter(EditCoverageCheckList));
