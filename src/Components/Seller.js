import React from "react";
import "./Seller.css";
import livenow from "../resources/marketplace/Livenow.jpg";
import reptuation from "../resources/marketplace/reptuation.jpg";
import blankpage from '../resources/icons/blank-folded-page.png';
import righticon from "../resources/icons/righticon.png";
import youtube from "../resources/icons/yt.png";
import marketonline from "../resources/marketplace/market_online.jpg";
import protools from "../resources/marketplace/protools.jpg";

function Seller() {
   const Style = {
      transform:"none",
      paddingTop:"40px"
   }
    return(
        <div className="mat-tab-body-content ng-trigger-translateTab" style={Style}>
           <div className="seller-heading ng-star-inserted">
                   A one stop platform for sellers
            </div>
            <div className="seller-subheading ng-star-inserted">
                   A single platform for the entire seller journey, from
                   <b> generating new business to managing it</b>
            </div>
            <div className="grid-container ng-star-inserted">
               <div className="d-card card hoverable">
                  <img className="live-now" alt="livenow" src={livenow}/>
                  <div className="grid-item">
                    <img className="grid-image" alt="reptuation" src={reptuation}/>
                  </div>
                  <div className="head-text">
                      Build your Reputation
                  </div>
                  <div className="sub-head-text">
                     Use the
                     <b> Smart Brand Builder & credibility Builder to showcase your work, </b>
                     differentiate your services ans prove your credibility to your clients.
                  </div>
                  <div className="more-links">
                     <img className="folded-icons" alt="blankpage" src={blankpage} />
                     <a className="link-5 arrow-link" href="https://talentopedia.com/Sell" target="blank">More about Reputation & Smart Tools</a>
                     <img id="arrow" src={righticon} alt="righticon" style={{width:"19px"}} />
                  </div>
                  <div className="more-links">
                        <img className="folded-icons" alt="youtube" src={youtube}/>
                        <a className="link-5 arrow-link" href="https://www.youtube.com/watch?v=QdfJZv2XgHc&ab_channel=Talentopedia" target="blank">How it Works</a>
                        <img id="arrow" src={righticon} alt="righticon" style={{width:"19px"}} />
                  </div>
               </div>
               <div className="d-card card hoverable">
               <img className="live-now" alt="livenow" src={livenow}/>
                  <div className="grid-item">
                    <img className="grid-image" alt="marketonline" src={marketonline}/>
                  </div>
                  <div className="head-text">
                      Sell and Market Online
                  </div>
                  <div className="sub-head-text">
                     Join forces with other Independent Professionals to increase leads & get qualified referrals. 
                     <b> Indegrate all your Social Handles and share yout projects, </b>
                     achievements from <b> one place </b>
                  </div>
                  
                  <div className="more-links-1">
                        <img className="folded-icons" alt="youtube" src={youtube}/>
                        <a className="link-5 arrow-link" href="https://www.youtube.com/watch?v=voHl68vXxAI" target="blank">How it Works</a>
                        <img id="arrow" src={righticon} alt="righticcon" style={{width:"19px"}} />
                  </div>
               </div>
               <div className="d-card card hoverable">
                   <div className="live-now-text">COMING SOON</div>
                   <div className="grid-item">
                      <img className="grid-image" alt="protools" src={protools}/>
                   </div>
                   <div className="head-text">Manage with PRO Tools</div>
                   <div className="sub-head-text">
                     Use PRO Tools to
                     <b> manage Invoicing, Milestones, Contracts & Proposals, Document Sharing, CRM, Tasks & Remainders. </b>
                     All Business Management
                     <b> at one place. </b>
                  </div>
                  <div className="more-links">
                     <img className="folded-icons" alt="blankpage" src={blankpage} />
                     <a className="link-5 arrow-link" href="https://medium.com/@Talentopedia/introducing-talento-pro-premium-tools-for-freelancers-66eae9770f85" target="blank">More about PRO Tools</a>
                     <img id="arrow" src={righticon} alt="righticon" style={{width:"19px"}} />
                  </div>
                  <div className="more-links">
                        <img className="folded-icons" alt="youtube" src={youtube}/>
                        <a className="link-5 arrow-link" href="https://www.youtube.com/watch?v=gXOXfA0FQqs" target="blank">How it Works</a>
                        <img id="arrow" src={righticon} alt="righticon" style={{width:"19px"}} />
                  </div>
               </div>
            </div>
        </div>
    );
}

export default Seller;