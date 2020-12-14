// Jared Borst, 12/13/2020

import React, { Component } from 'react' ;
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import logoFood from './foodphoto.jpg';

import "./index.css" ;

import Home from "./Home";
import SignIn from "./SignIn";
import Contact from "./Contact";
import GetApp from "./GetApp";

console.log(logoFood); // /foodphoto.png

function Header() {
  // Import result is the URL of your image
  return <img src={logoFood} alt="FoodPhoto" />;
}



class Main extends Component {
render () {
return (
  <HashRouter>
  <div>
  <a href="./Main.js"><h1 class="homeButton">GRUBHUB </h1></a>
  <ul class="topnav">
            <li class="active"><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/SignIn">Sign In/Sign Up</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/GetApp">Get our App</NavLink></li>
  </ul>
  <div className="content">
            <Route path="/Home" component={Home}/>
            <Route path="/SignIn" component={SignIn}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/GetApp" component={GetApp}/>
  </div>


</div>
</HashRouter>



       );
       
        }
}


export default Main;