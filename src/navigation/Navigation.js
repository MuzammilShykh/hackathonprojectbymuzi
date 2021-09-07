import Home from "../Modules/Home";
import Header from "../commonComponent/Header/Header";
import Footer from "../commonComponent/Footer/Footer";
import Login from "../Components/loginSignup/Login";
import SignUp from "../Components/loginSignup/SignUp";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navigation(params) {
    return(
<Router>
    <Header/>
    <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/aboutus">
       <h1>ABOUT US</h1>
        </Route>
        <Route path="/contact">
       <h1>Contact Us</h1>
        </Route>
        <Route path="/login">
      <Login/>
        </Route>
        <Route path="/signup">
       <SignUp/>
        </Route>
    </Switch>
    <Footer/>
</Router>
    )
}