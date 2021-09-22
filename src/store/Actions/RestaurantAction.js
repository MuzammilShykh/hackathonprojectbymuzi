import { FETCH_RESTAURANTS  } from "../Types/TypeConstants";
import {db} from "../../config/Firebase"






export const FetchRestaurant = () => async (dispatch,previousState) => {
    try {
      // Fetch Restaurants
  
      let snapshot = await db.collection("Restaurants").get();

     let restaurantsArray= []
     snapshot.forEach((doc) => {
        restaurantsArray.push({
            docID:doc.id,
            ...doc.data()
        });
     });
     
     console.log("data in action from firebase",restaurantsArray);
      dispatch({
        type:FETCH_RESTAURANTS,
        payload:restaurantsArray
  
      });
    } catch (error) {
      
        // alert(JSON.stringify(error))
      console.log("error", error);
    }
  };
  