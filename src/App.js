import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Modules/Home";
import Navigation from "./navigation/Navigation";
import { currentUserAction } from "./store/Actions/AuthAction";
import { useDispatch,useSelector } from "react-redux";
import { auth } from "./config/Firebase"
import './App.css';
import { useEffect, useState } from 'react';







function App() {

  let authState = useSelector(state => state.AuthReducer.isUserLoggedIn)

  const dispatch = useDispatch()
  const [currentUser,setCurrentUser]=useState(authState)
  useEffect(() => {
  auth.onAuthStateChanged( (user) => {
      if (user) {
        setCurrentUser(true)
      console.log("current user",currentUser);
        const uid = user.uid;
        
        dispatch(currentUserAction(currentUser))


      } else {

        setCurrentUser(false)
        console.log("user signed out");
        console.log("current user",currentUser);
        dispatch(currentUserAction(currentUser))

      }

    });
    
   
  });
  
  return (
    <>
    
   
   <Navigation/>

   
    </>
  );
}

export default App;
