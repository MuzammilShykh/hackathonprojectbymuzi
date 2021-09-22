import { combineReducers } from "redux";
import AuthReducer from "./Reducers/AuthReducer";
import RestaurantReducer from "./Reducers/RestaurantReducer";

const rootReducer = combineReducers({
    AuthReducer,
    RestaurantReducer, 
// manageUsers

});


export default rootReducer;