import React from "react";
import firebase from "firebase";
import {Link} from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./Sign.css";


function Signin()  {
    var uiConfig = ({
        signInFlow: "redirect",
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
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
        <section className="login-block">
            <div className="auth-box card1">
                <div className="card-block">
                    <div className="row">
                       <div class="col-md-12">
                           <h4 className="text-center heading">Sign In to talentopedia</h4>
                            <StyledFirebaseAuth
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()}
                           />
                       </div>
                    </div>
                   <div className="signing-footer text-body-2">
                     <p> Not a member yet? </p><Link className="link-button text-body-2 yellow" to="/Signup">Join now</Link>
                   </div>
                </div>
                        </div>   
    </section>
    )
    
}

export default Signin;