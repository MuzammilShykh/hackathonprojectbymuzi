import Home from "../Modules/Home";
import Header from "../commonComponent/Header/Header";
import Footer from "../commonComponent/Footer/Footer";
import Login from "../Components/loginSignup/Login";
import SignUp from "../Components/loginSignup/SignUp";
import Help from "../Modules/Help";
import PrivateRouting from "./PrivateRouting";
import PublicRouting from "./PublicRouting";
import { useDispatch, useSelector } from "react-redux";
import AddRestaurant from "../Modules/AddRestaurant";
import Faisalabad from "../Modules/cities/Faisalabad";
import Lahore from "../Modules/cities/Lahore";
import Karachi from "../Modules/cities/Karachi";
import Islamabad from "../Modules/cities/Islamabad";
import About from "../Modules/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";

export default function Navigation(props) {

 


  let authState = useSelector(state => state.AuthReducer.isUserLoggedIn)

console.log(authState);
 
    return(

<Router>
    <Header/>
    <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/faisalabad">
       <Faisalabad/>
        </Route>
        <Route path="/lahore">
       <Lahore/>
        </Route>
        <Route path="/karachi">
       <Karachi/>
        </Route>
        <Route path="/islamabad">
       <Islamabad/>
        </Route>


        <PrivateRouting path="/aboutus" auth={authState}>
       <About/>
        </PrivateRouting>



        <PrivateRouting path="/faq" auth={authState}>
       <Help/>
        </PrivateRouting>




        <PublicRouting path="/login"  auth={authState}>
      <Login/>
        </ PublicRouting>


        <PublicRouting path="/signup"  auth={authState}>
       <SignUp/>
        </PublicRouting>
        <PrivateRouting path="/addrestaurant"  auth={authState}>
       <AddRestaurant/>
        </PrivateRouting>



    </Switch>
    <Footer/>
</Router>
    )
}