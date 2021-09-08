



import {AUTH_LOGIN,AUTH_LOGOUT} from "../Types/TypeConstants";
// we will use this isUserLoggedIn in navigation for checking weather user login or not
const initialState = {
  isUserLoggedIn : false,
  user: null,
 }
 
 
 function AuthReducer(state=initialState, action) {
     switch (action.type) {

         case AUTH_LOGIN:{
        // if user login than what?
             return {
                 ...state,
                isUserLoggedIn:  true,
                user: action.payload
             };
         }

         case AUTH_LOGOUT:{
            // if user login than what?
                 return {
                     ...state,
                    isUserLoggedIn:  false,
                    user:null
                 };
             }
                
             
     
         default:
         return state;
     }
 }
 
 export default AuthReducer;