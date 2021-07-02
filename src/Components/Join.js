import React from "react";
import "./Join.css";

function Join(){
    return(
     <section>
         <div className="join-main-container" id="showcase2">
           <div className="wrld-txt">
              <div className="work-text-head-join">
                  Want to better the lives
                  <br/>
                  of Millions? Join us
              </div>
              <div className="work-sub-text-join">
                 We are currently seeking UI/UX designers, Software developers in all domains
              </div>
              <a href="https://angel.co/company/talentopedia/jobs" target="blank">
                  <div className="join-now-container">
                     <div className="join-now-button">
                        <div className="join-now-text">Join Now</div>
                     </div>
                  </div>
              </a>
           </div>
         </div>
     </section>
    );
}
export default Join;