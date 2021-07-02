import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import yellow_tick_icon from "../resources/icons/yellow_tick_icon.png"
import "./UserProfile.css";
import Loader from "./Loader";
import tplogo from "../resources/icons/tplogo.png";
import showt from "../resources/icons/shout.png";
import playButton from "../resources/icons/play_button.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


function UserProfile()
{
    const userProfileKey = useParams().params;
    const [userDetails,setUserDetails] = useState({});
    const [loading,setLoading] = useState(true);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
             userProfileKey: `${userProfileKey}`,
             careerName: "web",
             deviceName: "browser",
             platform: "browser",
             timeZone: "Asia/Calcutta"
        })
      };
    
    const getUserDetails = async ()=> {
        try {
            fetch("https://talentopedia.in:8443//foodies-app/app/visitProfileOnWeb",requestOptions)
            .then(responce => responce.json())
            .then((data)=>{setUserDetails(data.visitProfile.userProfile);setLoading(false)})
        } catch(err) {
            alert(err.message)
        }
    }
    useEffect(()=>{
          getUserDetails();
    },[])
    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }
    console.log(userDetails);
 //settings for slick carousel
    let settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div>{loading?<Loader/>:<>
           <div className="col-md-4 card" style={{padding:"10px"}}>
             <div className="profile-photo">
              <img alt="profilephoto" className="userprofile" src={`https://s3.ap-south-1.amazonaws.com/moode-media/${userDetails.profilePic}`}/>
              {userDetails.userRole==="VERIFIED"?<div className="verified-user">
                 <img alt="profilephoto" className=" verified-user" src={yellow_tick_icon}/>
               </div>:<></>}
             </div>
             <div className="username">{userDetails.name}</div>
             <div className="cityname">{userDetails.city},{userDetails.country}</div>
             <div className="about-me-container">
                 <div className="aboutme">{userDetails.aboutMe}</div>
             </div>
             <div className="stats-row">
                <div className="stats-container">
                    {
                        userDetails.userTalents.map((eachTalent,index)=>{
                           return(
                           <>
                              <div className="stats-item" key={index}>{eachTalent.name}</div>
                              <div className="stats-item item-right" key={index}>PRO {eachTalent.experience[0]} YRS</div>
                           </>
                             
                           )
                        })
                    }
                </div>
             </div>
             <div className="btns-row justify-content-between">
                 <div className=" btn-left">
                     <div className="storyland-header-connect-btn btn-left">
                         Connect
                     </div>
                 </div>
                 <div className="btn-right ">
                     <div className="storyland-header-follow-btn ">
                         Follow
                     </div>
                 </div>
             </div>
             <div className="stats-row">
                 <div className="stats-container">
                     <div className="stats-item">
                         <img alt="Views" className="tplogo" src={tplogo}/>  Views
                     </div>
                     <div className="stats-item item-right">{kFormatter(userDetails.totalView)}</div>
                     <div className="stats-item">
                         <img alt="claps" className="tplogo" src={tplogo}/>  Claps
                     </div>
                     <div className="stats-item item-right">{kFormatter(userDetails.likes)}</div>
                     <div className="stats-item">
                         <img alt="showtouts" className="showt" src={showt}/>  Shoutouts
                     </div>
                     <div className="stats-item item-right">{kFormatter(userDetails.totalComment)}</div>
                     <div className="stats-item">
                         <img alt="Worklogo" className="tplogo" src={tplogo}/>  Work
                     </div>
                     <div className="stats-item item-right">{kFormatter(userDetails.totalPost)}</div>
                     <div className="stats-item">
                         <img alt="tplogo" className="tplogo" src={tplogo}/>  Collaborators
                     </div>
                     <div className="stats-item item-right">{kFormatter(userDetails.tagPeople.length)}</div>
                     <div className="stats-item">
                         <img alt="tplogo" className="tplogo" src={tplogo}/>  Locations
                     </div>
                     <div className="stats-item item-right">{kFormatter(userDetails.loc.length)}</div>
                 </div>
             </div>
           </div>
           <div className="col-md-8" style={{paddingLeft:"30px",paddingRight:"30px", paddingTop:"20px",marginBottom:"70px"}}>
              {
                  userDetails.userTalents.map((Talent,index)=>{
                      return (
                          <>
                          <div className="Talent-name" key={index}>{Talent.name}</div>
                          <div className="slider-package userprofileslick" >
                                <Slider {...settings}>
                                    {
                                        Talent.posts.map((Post,index)=>{
                                           if(Post.postCover[0].type ===1 )
                                           {
                                               return (
                                                   <div >
                                                        <img alt="workpic" className="userprofile-work-pic hoverimg imgstyle" style={{width:"183px"}} src={`${Post.postCover[0].url}`} key={Post.postCover[0].postID}/>
                                                        <div className="play_button_userprofile click_class" >
                                                            <img alt="playbutton" className="post_play_icon" src={playButton}/>
                                                        </div>
                                                    </div>
                                               )
                                           } 
                                           else if(Post.postCover[0].type === 2)
                                           {
                                               return(
                                                  <div style={{float:"left"}} >
                                                     <img  alt="workpic" className="userprofile-work-pic hovering imgstyle" src={`https://s3.ap-south-1.amazonaws.com/moode-media/${Post.postCover[0].url}`}/>
                                                  </div>
                                               )
                                           }
                                           else if(Post.postCover[0].type=== 5)
                                           {
                                               return(
                                                   <div >
                                                      <img alt="workpic" className="userprofile-work-pic hovering imgstyle" src={`https://s3.ap-south-1.amazonaws.com/moode-media/${Post.postCover[0].url}`} key={Post.postCover[0].postID} />
                                                      <div className="play_button_userprofile click_class" >
                                                            <img alt="playbutton" className="post_play_icon" src={playButton}/>
                                                      </div>
                                                   </div>
                                               )
                                           }
                                           else if(Post.postCover[0].type === 6)
                                           {
                                               return(
                                                   <div >
                                                      <img alt="workpic" className="userprofile-work-pic hovering" src={`${Post.postCover[0].linkThumb}`} key={Post.postCover[0].postID}/>
                                                      <div className="play_button_userprofile click_class" >
                                                            <img alt="playbutton" className="post_play_icon" src={playButton}/>
                                                      </div>
                                                   </div>
                                               )
                                           }
                                           
                                        })
                                    }
                                </Slider>
                          </div>
                            
                          
                          </>
                      )
                  })
              }
           </div>
           </>
          }
        </div>
    )
}

export default UserProfile;