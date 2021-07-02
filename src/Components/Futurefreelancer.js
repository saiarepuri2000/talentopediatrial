import React from "react";
import "./Futurefreelancer.css";
import {Link} from "react-router-dom";
import TalentoGrid from "./TalentoGrid";
function Futurefreelancer(){
    return(
      <section>
           <div className="business-container-main">
              <div className="empowertext-business">
                    The Freelanccing Platform bridging the Future of Work
              </div>
              <div className="business-container">
                  <div className="business-item">
                     <div className="business-text">
                        Hire a Freelancer
                     </div>
                     <a  href="mailto:contact@talentopedia.com">
                       <div className="sell-button">Start Hiring</div>
                     </a>
                  </div>
                  <div className="business-item-1">
                      <div className="business-text-work">
                         Join as a Freelancer
                      </div>
                      <Link to="">
                          <div className="sell-button">
                             Access Business Tools
                          </div>
                      </Link>
                  </div>
              </div>
           </div>
      </section>
    )
}

export default Futurefreelancer;