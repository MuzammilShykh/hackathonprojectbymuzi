import Home from "../Modules/Home";
import Header from "../commonComponent/Header/Header";
import Footer from "../commonComponent/Footer/Footer";
import Login from "../Components/loginSignup/Login";
import SignUp from "../Components/loginSignup/SignUp";
import Help from "../Modules/Help";
import PrivateRouting from "./PrivateRouting";
import PublicRouting from "./PublicRouting";
import { useSelector } from "react-redux";
import AddRestaurant from "../Modules/AddRestaurant";
import Faisalabad from "../Modules/cities/Faisalabad";
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
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/city/faisalabad">
       <Faisalabad/>
        </Route>

        <PrivateRouting path="/aboutus" auth={authState}>
       <h1>ABOUT US</h1>
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