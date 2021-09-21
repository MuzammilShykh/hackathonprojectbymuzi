import {  AUTH_LOGIN,AUTH_LOGOUT } from "../Types/TypeConstants";

import { auth, db } from "../../config/Firebase";


export const doLogin = (email, password) => async (dispatch) => {
  try {
    // firebase login

    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    var user = userCredential.user;
   
    console.log("user", user.uid);
    dispatch({
      type:AUTH_LOGIN,
      payload: user,

    });
  } catch (error) {
    
      alert(JSON.stringify(error))
    console.log("error", error);
  }
};


export const doSignup = (user) => async (dispatch) => {
  try {
    // firebase login

    const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
    
    var userData = userCredential.user;

    // db firestore
    await db.collection("users").add({
       ...user,
       uid: userData.uid
    })
    
    dispatch({
      type:AUTH_LOGIN,
      payload: userData,
    });

  } catch (error) {
      alert(JSON.stringify(error))
    console.log("error", error);
  }
};



export const doLogout = () => async (dispatch) => {
    try {
      // firebase login
      const res = await auth.signOut();
      console.log("user", res);
      dispatch({
        type: AUTH_LOGOUT,
      });
    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    }
  };

  


