import React from "react";
import "./Install.css";
import img1 from "../resources/icons/harsh.jpg"
import img2 from "../resources/icons/Logo-foody.png"
import img3 from "../resources/icons/android.png"
import img4 from "../resources/icons/iphone.png"
function Install(){
    return(
       <div className="main container">
          <div className="row clearfix padding_10">
             <div className="col-md-6 col-xs-12">
                <img src={img1} alt="mobile"className="width_70"/>
             </div>
             <div className="col-md-6 col-xs-12 margin_top_up">
                <div className="row1 clearfix">
                    <img src={img2} alt="talentopedia" className="header_img left_aligned1"/>
                </div>
                <div className="row clearfix intro_text padding_10 text_align_justify">
                    <div className="text-intro">
                       Talentopedia: World's 1st Business Tool for Freelancers. Sell, Market and Manage your Business for Free
                    </div>
                </div>
                <div className="row clearfix download_text padding_10 text_align_justify">
                    Download the free app for iPhone or Android
                </div>
                <div className="row2 clearfix left_aligned padding_10">
                    <div className="inline_display padding_top_10">
                       <a href="https://play.google.com/store/apps/details?id=com.moode">
                         <img className="i1" src={img3} alt="playstore_android"/>
                       </a>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.moode">
                   </a>
                   <div className="inline_display padding_top_10">
                   <a href="https://play.google.com/store/apps/details?id=com.moode"> </a>
                   <a href="https://itunes.apple.com/us/app/moode/id1141287560" > <img alt="image4" src={img4}/>
                    </a>
                   </div>
                   <a href="https://itunes.apple.com/us/app/moode/id1141287560"> </a>
                </div>
                <a href="https://itunes.apple.com/us/app/moode/id1141287560">
                </a>
             </div>
          </div>
       </div>
    );
}

export default Install