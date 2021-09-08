import Home from "../Modules/Home";
import Header from "../commonComponent/Header/Header";
import Footer from "../commonComponent/Footer/Footer";
import Login from "../Components/loginSignup/Login";
import SignUp from "../Components/loginSignup/SignUp";
import PrivateRouting from "./PrivateRouting";
import PublicRouting from "./PublicRouting";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navigation(params) {

  const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
  console.log(authState);
    return(

<Router>
    <Header/>
    <Switch>
        <PrivateRouting exact path="/" auth={authState}>
        <Home/>
        </PrivateRouting>


        <PrivateRouting path="/aboutus" auth={authState}>
       <h1>ABOUT US</h1>
        </PrivateRouting>



        <PrivateRouting path="/contact" auth={authState}>
       <h1>Contact Us</h1>
        </PrivateRouting>




        <PublicRouting path="/login"  auth={authState}>
      <Login/>
        </ PublicRouting>


        <PublicRouting path="/signup"  auth={authState}>
       <SignUp/>
        </PublicRouting>
    </Switch>
    <Footer/>
</Router>
    )
}