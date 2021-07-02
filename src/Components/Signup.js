import React from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {Link} from "react-router-dom";

import "./Sign.css";

firebase.initializeApp({
    apiKey:"AIzaSyAJNA9LI_cRaRtURgYiW5ddJ_iFMXgHRyg",
    authDomain: "saitalentopedia.firebaseapp.com"
});

function Signup(){
    var uiConfig = ({
        signInFlow: "redirect",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
          ],
          callbacks: {
              signInSuccess : function(currentUser, credential,redirectUrl) {
                
                window.location.assign('/');
                return false
              }
          }
    })

    return (
    <section className="login-block " >
      <div className="auth-box card1">
        <div className="card-block">
          <div className="row">
            <div className="col-md-12">
                <h4 className="text-center heading">Join talentopedia</h4>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
         </div>
         <div className="signing-footer text-body-2">
          <p> Already a member? </p><Link className="link-button text-body-2 yellow" to="/Signin">Sign In</Link>
         </div>
      </div>
     </div>
     </section>
    )
  
}

export default Signup;