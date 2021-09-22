import { FETCH_RESTAURANTS  } from "../Types/TypeConstants";

const initialState = {
 restaurantsArray:[],
 }
 
 
 function RestaurantReducer(state=initialState, action) {
     switch (action.type) {

         case FETCH_RESTAURANTS  :{
        console.log("data in reducer",action.payload);
             return {
                 ...state,
              restaurantsArray:action.payload,
                
             };
         }

        //  case AUTH_LOGOUT:{
        //     if user login than what?
        //          return {
        //              ...state,
        //             isUserLoggedIn:  false,
        //             user:null
        //          };
        //      }
                
             
     
         default:
         return state;
     }
 }
 
 export default RestaurantReducer;