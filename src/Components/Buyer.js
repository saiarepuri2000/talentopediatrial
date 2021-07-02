import React from "react";
import "./Buyer.css";
import prototype from "../resources/marketplace/prototype.jpg";
import hireAI from "../resources/marketplace/hire_Ai.jpg";
import monitor from "../resources/marketplace/monitor_proactively.jpg";

function Buyer(){
   const Style = {
      transform:"none",
      paddingTop:"40px"
   }
    return(
        <div className="mat-tab-body-content ng-trigger ng-trigger-translateTab" style={Style}>
           <div className="seller-heading ng-star-inserted">
              Buying services with AI Assistant
           </div>
           <div className="seller-subheading ng-star-inserted">
              A SMART platform driven by AI which
              <b> transforms your ideas in your head into REALITY. </b>
           </div>
           <div className="grid-container ng-star-inserted">
              <div className="d-card card hoverable">
                 <div className="live-now-text">
                    COMING SOON
                 </div>
                 <div className="grid-item">
                    <img className="grid-image" alt="prototype" src={prototype}/>
                 </div>
                 <div className="head-text">
                   Build your Prototype
                 </div>
                 <div className="sub-head-text">
                    Use a Smart Platform to 
                    <b> build initial prototypes and benchmarks for the products and services you wish to procure. </b>
                    Customize the offerings to fit your requirement
                 </div>
              </div>
              <div className="d-card card hoverable">
              <div className="live-now-text">
                    COMING SOON
                 </div>
                 <div className="grid-item">
                    <img className="grid-image" alt="hireAI" src={hireAI}/>
                 </div>
                 <div className="head-text">
                   Hire with AI Engine
                 </div>
                 <div className="sub-head-text">
                    The <b>AI Platform breaks </b>down the <b> project </b>into distributed<b> tasks </b>
                    and then <b> maps it to qualified service professionals. </b>You <b> control the 
                    price and timelines </b> and everything is done <b> automatically.</b>
                 </div>
              </div>
              <div className="d-card card hoverable">
              <div className="live-now-text">
                    COMING SOON
                 </div>
                 <div className="grid-item">
                    <img className="grid-image" alt="monitor" src={monitor}/>
                 </div>
                 <div className="head-text">
                   Monitor Proactively
                 </div>
                 <div className="sub-head-text">
                    Being a Buyer is now super easy with <b>automated reports and alerts sent on your preffered communication platform. </b>
                    The AI Support BOT is <b> available 24/7 </b> to resolve all your queries.
                 </div>
              </div>
           </div>
        </div>
    );
}

export default Buyer;