import React, { useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCarNotOnPolicyCheckLists } from './store/CarNotOnPolicyCheckLists/action';
import { fetchAllClaims } from './store/Claims/action';
import { fetchAllCoverageCheckLists } from './store/CoverageCheckLists/action';
import { fetchAllTransportationCheckList } from './store/TransportationCheckLists/action';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS

import Dashboard from "./components/dashboard/Dashboard"
import AddCarNotOnPolicyCheckList from "./components/carNotOnPolicyCheckLists/AddCarNotOnPolicyCheckList";
import EditCarNotOnPolicyCheckList from "./components/carNotOnPolicyCheckLists/EditCarNotOnPolicyCheckList";
import ListOfClaims from "./components/claims/ListOfClaims";
import AddCoverageCheckList from "./components/coverageCheckLists/AddCoverageCheckList";
import EditCoverageCheckList from "./components/coverageCheckLists/EditCoverageCheckList";
import AddTransportationCheckList from "./components/transportationCheckLists/AddTransportationCheckList";
import EditTransportationCheckList from "./components/transportationCheckLists/EditTransportationCheckList";
import ClaimView from "./components/claimView/ClaimView"


const App = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCarNotOnPolicyCheckLists());
    dispatch(fetchAllClaims());
    dispatch(fetchAllCoverageCheckLists());
    dispatch(fetchAllTransportationCheckList());

  }, []);
  return (
    <div className="App">
      <Router>
        <Dashboard />

        <Switch>
          <Route exact path="/" component={ListOfClaims} />
          <Route path="/claims/:id" component={ClaimView} />
          {/* <Route path="/coverageCheckList/:id" component={CoverageCheckList} /> */}
          {/* <Route path="/addCoverageCheckList" component={AddCoverageCheckList} /> */}
          <Route path="/editTransportationCheckList/:id" component={EditTransportationCheckList} />
          <Route path="/addTransportationCheckList/:id" component={AddTransportationCheckList} />
          <Route path="/editCarNotOnPolicyCheckList/:id" component={EditCarNotOnPolicyCheckList} />
          <Route path="/addCarNotOnPolicyCheckList/:id" component={AddCarNotOnPolicyCheckList} />

          
          {/* <Route path="" component={AddCarNotOnPolicyCheckList} />
          <Route path="" component={EditCarNotOnPolicyCheckList} />
          <Route path="" component={AddCoverageCheckList} />
          <Route path="" component={EditCoverageCheckList} />
          <Route path="" component={AddTransportationCheckList} />
         
          <Route path="" component={EditTransportationCheckList} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
