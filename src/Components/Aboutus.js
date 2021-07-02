import React from "react";
import "./Aboutus.css"
import img1 from "../resources/marketplace/freelancers.jpg"
function Aboutus(){
    return (
      <div className="container-fluid" id="Aboutus">
        <div className="row1">
          <div className="col-md-51">
             <div className="work-text-head-talentopedia">
                 What is talentopedia ?
             </div>
             <div className="work-sub-text-talentopedia">
                  Talentopedia is designing the
                  <b> Freelancing Platform </b>
                  of the future by
                  <b> solving deep issues </b>
                  <b> for Sellers & Buyers. </b>
             </div>
          </div>
          <div className="col-mod-7">
             <img alt="future of work" className="freelancers lazyload" src={img1}/>
          </div>
        </div>
      </div>
    )
}
export default Aboutus;