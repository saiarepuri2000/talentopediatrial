import React,{useState} from "react";
import {Link, NavLink} from "react-router-dom"
import img1 from "../resources/icons/tplogo.png"
import "./Navbar.css";
import firebase from "firebase";

function Navbar() {
    const [name,setname] = useState("")
    const [present,setpresent] = useState(false)
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          setname(user.photoURL);
          setpresent(true);
        }
        else{
          setpresent(false)
        }
    })
    return (
      <div className="header_bar_div  header-mood-bar-fixed header_moods_mobile_bar">
          <div className="header header-main-height ">
             <div className="col-md7">
                <a href="/"><img className="moode-logo-image click-class"  alt="talentopedia icon" src={img1}/> </a>
                <div className="o-section--feature-companies__logos">
                    <div className="header-nav">
                       <a className="ac"href="#Aboutus">About Us</a>
                    </div>
                    <div className="header-nav-2">
                        <a className="ac" href="#Oursolutions" >Our Solutions</a>
                    </div>
                    <div className="header-nav-3">
                        <a className="ac" href="#Future">Future of Work</a>
                    </div>
                    <div className="header-nav-4">
                        <a className="ac" href="https://talentopedia.com/blog.html" target="blank">Blog</a>
                    </div>
                    <div className="header-nav-5">
                        <a className="ac" href="#FAQs"to="/">FAQs</a>
                    </div>
                </div>
             </div>
             <div className="flex-container">
                {present?(<img className="profilepic" alt="profilepic" src={name}/>):( <NavLink className="sell-button-hire" to="/Signup" >
                    Hire a Freelancer
                </NavLink>)}
                <div className="get_moode_app click_class">
                  <Link className="get-moode-app-text" to="/install">JOIN AS A FREELANCER</Link>
                </div>
            </div>
          </div>
      </div>
    )
}

export default Navbar;