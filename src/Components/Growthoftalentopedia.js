import React from "react";
import "./Growthoftalentopedia.css";
function Growth(){
    return(
      <section>
        <div style={{color:"#333"}} className="container-fluid">
           <div className="empowertext">
               How our Independent Proffesionals are growing with Talentopedia
           </div>
           <div className="row">
             <div className="col-md-3">
                <div className="ac-text">
                    Reputation Managed for
                    <br/>
                    <b style={{fontSize:"40px"}}>100,000+</b>
                    <br/>
                    Proffesionals & SMEs
                </div>
             </div>
             <div className="col-md-4">
                <div className="ac-text">
                   User in over
                   <br/>
                   <b style={{fontSize:"40px"}}>61 Countries</b>
                   <br/>
                   in 1000 Cities Globally
                </div>
             </div>
             <div  className="col-md-5">
                <div  className="ac-text-2">
                   Proffesionals & SMEs from
                   <br/>
                   <b style={{fontSize:"40px"}}>250+ Service Sectors</b>
                   <br/>
                   in over 17 industries
                </div>
             </div>
           </div>
        </div>
      </section>
    );
}

export default Growth;