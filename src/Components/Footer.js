import React, { useState } from "react";
import "./Footer.css";
import logofb from "../resources/icons/social/Facebook.png";
import logoinsta from "../resources/icons/social/insta.png";
import logolinkdn from "../resources/icons/social/linkedin.png";
import logoyoutube from "../resources/icons/social/youtube.png";
import { Link } from "react-router-dom";
import firebase from "firebase";

function Footer() {
   const [present,setpresent] = useState(false)
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          setpresent(true);
        } else {
           setpresent(false);
        }
    })
    return (
      <div  className="footer-main-container">
          <div classNam="padding-bottom-20 row">
             <div className="col-md-5 col-sm-5">
                <div className="footer-left-main-container">
                    <div className="footer-text-container">
                        <b>Follow Us On</b>
                    </div>
                    <br/>
                    <a href="https://www.facebook.com/talentopedia.businesstool">
                       <img className="footer-icon" alt="facebook"src={logofb}/>
                    </a>
                    <a href="https://www.instagram.com/talentopedia.app/">
                       <img className="footer-icon" alt="instagram" src={logoinsta} />
                    </a>
                    <a href="https://www.linkedin.com/in/talentopedia">
                       <img className="footer-icon" alt="linkedin" src={logolinkdn} />
                    </a>
                    <a href="https://www.youtube.com/channel/UC6Vh81W2v1t4fP-vz-Sm6AA">
                       <img className="footer-icon" alt="youtube" src={logoyoutube} />
                    </a>
                </div>
             </div>
             <div className="col-md-7 col-sm-7">
                <div className="footer-right-main-container">
                    <div>
                        <div className="col-md-6">
                           <div className="first-list">
                              <div className="footer-list">
                               <a href="/">
                                 <div className="footer-list-items-head">About</div>
                               </a>
                               <a  href="/">
                                 <div className="footer-list-items">Careers</div>
                               </a>
                               <Link  to="/">
                                 <div  className="footer-list-items">Talentopedia Blog</div>
                               </Link>
                               <a  href="/">
                                 <div  className="footer-list-items">T&amp;C</div>
                               </a>
                               <a href="/">
                                 <div className="footer-list-items">Privacy</div>
                               </a>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="second-list">
                              <div className="footer-list">
                                 <div className="footer-list-items-head">Contact</div>
                                 <a href="tel:8826390242">
                                   <div className="footer-list-items">+91-88-26390-242</div>
                                 </a>
                                 <a href="mailto:contact@talentopedia.com">
                                   <div className="footer-list-items">contact@talentopedia.com</div>
                                 </a>
                                    {present ?(<div className="signout-button" onClick={()=>firebase.auth().signOut()}>Sign Out</div>):(null)}
                                 
                              </div>
                           </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
          <div className="row">
            <div className="footer-bottom-container">
               
               <div className="col-md-12">
                   <div className="footer-bottom-center-container">
                      © 2016-20 Talentopedia, Yajna Tech Ventures Pvt. Ltd
                      All Rights Reserved
                   </div>
               </div>
            </div>
          </div>
      </div>
    );
}

export default Footer;