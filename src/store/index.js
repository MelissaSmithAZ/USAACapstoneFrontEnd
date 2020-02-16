import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import carNotOnPolicyCheckListsReducer from './CarNotOnPolicyCheckLists/reducer'
import claimsReducer from './Claims/reducer'
import coverageCheckListsReducer from './CoverageCheckLists/reducer'
import transportationCheckListsReducer from './TransportationCheckLists/reducer';

const rootReducer = combineReducers({
    carNotOnPolicyCheckLists: carNotOnPolicyCheckListsReducer,
    claims: claimsReducer,
    coverageCheckLists: coverageCheckListsReducer,
    transportationCheckLists: transportationCheckListsReducer
});

const middleware = [logger, thunk];

export default createStore(rootReducer, applyMiddleware(...middleware));
