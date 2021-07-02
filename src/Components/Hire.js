import React,{useState,useEffect} from "react";
import tplogo from "../resources/icons/tplogo.png"
import hiring from "../resources/icons/Hiring.png"
import {Link, useParams} from "react-router-dom";
import ReactPaginate from "react-paginate";
import yellow_tick_icon from "../resources/icons/yellow_tick_icon.png"
import playButton from "../resources/icons/play_button.png"
import Loader from "./Loader"
import "./Hire.css"
import "./PaginationStyle.css"
import ModalImage from "react-modal-image"
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import Modal from "react-modal";


const PER_PAGE = 10;

function Hire() {
    const ID = useParams().params;
    const [Users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    
    const [currentPage,setCurrentPage] = useState(0);
    const [isOpen,setOpen] = useState(false);
    const [URL,setURL] = useState("");
    const [videoID,setVideoID] = useState("");
    const [isyt,setIsyt] = useState(true);
    const [modalIsOpen,setMOdalIsOpen] = useState(false);

    const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
               id: `${ID}`,
               pageID: 1,
               careerName: "web",
               deviceName: "browser",
               platform: "browser",
               timeZone: "Asia/Calcutta"
          })
    };
    const getUsers = async () => {
        try{
           fetch("https://talentopedia.in:8443/foodies-app/app/getTalentByUsers",requestOptions)
           .then(responce => responce.json())
           .then((data)=>{ setUsers(data.getTalentByUsers.users); setLoading(false)})
        } catch(err) {
                alert(err.message)
        }
     }
    useEffect(()=>{
        getUsers();
    },[])

    function handlePageClick({selected: selectedPage}) {
        setCurrentPage(selectedPage);
    }
    function handleUrl(url)
    {
         if(url.match('http://(www.)?youtube|youtu\.be')){
            setIsyt(true)
        const modifiedID = url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
        setVideoID(modifiedID);
       }
        else{
            var match = /vimeo.*\/(\d+)/i.exec(url);
          if(match){
            setIsyt(false);
            setVideoID(match[1]);
          }
          else{
              console.log("NO");
          }
      }
    }
    const offset = currentPage*PER_PAGE;
    const pageCount = Math.ceil(Users.length/PER_PAGE);
   
    return (
        <div className="row clearfix-hire">
            <div className="header_bar_div1 width_100">
                <div className="header header-main-height">
                    <div className="col-md-6">
                        <a href="/TalentoGrid">
                        <img alt="tplogo" className="moode-logo-image click_class" src={tplogo}/>
                        </a>
                        <div className="o-section--feature-companies__logos">
                            <div className="header-nav-grid">
                                <a className="ag" href="#start">Start </a>
                            </div>
                            <div className="header-nav-2-grid">
                                <a className="ag" href="#market">Market</a>
                            </div>
                            <div className="header-nav-3-grid">
                                <a className="ag" href="#sell">Sell</a>
                            </div>
                            <div className="header-nav-4-grid">
                                <a className="ag" href="#manage">Manage</a>
                            </div>
                        </div>
                        </div>
                        <div className="flex-container">
                            <div>
                                <a href="https://angel.co/company/talentopedia" target="blank">
                                    <img alt="we are hiring" className="we-are-hiring" src={hiring}/>
                                </a>
                            </div>
                            <div>
                                <div className="faq-head">
                                    <a className="get-moode-app-text" href="#1">
                                        FAQ
                                    </a>
                                </div>
                            </div>
                            <div>
                            <div className="get_moode_app_grid click_class">
                                <Link to="/Install" className="get-moode-app-text">
                                    Join for Free
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>
                {loading?(<div className="no-data"><Loader/></div>): Users.length>0?
                (<><div className="users-data-container">
                    {Users.slice(offset,offset+PER_PAGE).map((eachUser,index)=>{
                        return (
                        <div className="card-hire user-container-hire" key={eachUser.userID}>
                            <div className="user-detail-item">
                                <div className="row">
                                    <div className="user-details">
                                        <div className="user-picture">
                                            <Link to={`/userprofile/${eachUser.userProfileKey}`}>
                                                
                                                <img alt="profilephoto" className="profilephoto" src={`https://s3.ap-south-1.amazonaws.com/moode-media/${eachUser.profilePic}`}/>
                                            </Link>
                                        </div>
                                        {eachUser.userRole==="VERIFIED"?<div className="verified-icon">
                                        <img alt="profilephoto" className="verified-icon" src={yellow_tick_icon}/>
                                        </div>:<></>}
                                        <div className="userInfo">
                                            <Link to={`/UserProfile/${eachUser.userProfileKey}`}>
                                              <div className="user-name">{eachUser.name}</div>
                                            </Link>
                                            <div className="user-info">{eachUser.userType}</div>
                                            <div className="user-experience">{eachUser.experience}</div>
                                            <div className="user-location">{eachUser.city}</div>
                                        </div>
                                        <div className="b-col-auto" style={{display:"flex"}}>
                                             <div className="projectsList" >
                                                {
                                                    eachUser.postCover.slice(0,3).map((eachPost,index)=>{
                                                        return(
                                                            <div className="user-work" key={index}>
                                                                {(()=>{
                                                                    
                                                                if(eachPost.type === 1){
                                                                    return(
                                                                        <div>
                                                                            <ModalVideo  theme="dark" channel='youtube' autoplay isOpen={isOpen} videoId={`${videoID}`} onClose={() => {setOpen(false);setVideoID("");setOpen(false)}} />
                                                                            <img alt="workpic" className="work-pic hoverimg" src={`${eachPost.url}`} key={eachPost.postID}/>
                                                                            <div className="post_detail_play_button_style1 click_class" onClick={()=> {setOpen(true);setVideoID(eachPost.videoId)}}>
                                                                                <img alt="playbutton" className="post_play_icon" src={playButton}/>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                } 
                                                                else if(eachPost.type === 2){
                                                                    return (
                                                                        <div>
                                                                           <ModalImage
                                                                                key={eachPost.postID}
                                                                                className="work-pic hoverimg"
                                                                                small={`https://s3.ap-south-1.amazonaws.com/moode-media/${eachPost.url}`}
                                                                                medium={`https://s3.ap-south-1.amazonaws.com/moode-media/${eachPost.url}`}
                                                                                
                                                                            />
                                                                        </div>
                                                                    )
                                                                } 
                                                                else if(eachPost.type === 5) {
                                                                    return (
                                                                        <div>
                                                                          <Modal
                                                                            isOpen={modalIsOpen}
                                                                            onRequestClose={() => setMOdalIsOpen(false)}
                                                                            overlayClassName={{
                                                                            base: "overlay-base",
                                                                            afterOpen: "overlay-after",
                                                                            beforeClose: "overlay-before"
                                                                            }}
                                                                            className={{
                                                                            base: "content-base",
                                                                            afterOpen: "content-after",
                                                                            beforeClose: "content-before"
                                                                            }}
                                                                            closeTimeoutMS={500}
                                                                            >  
                                                                              <video width="460" height="230" controls src={`https://s3.ap-south-1.amazonaws.com/moode-media/${URL}`} type="video/mp4"/>
                                                                           </Modal>
                                                                           
                                                                          <img alt="workpic" className="work-pic hoverimg" src={`https://s3.ap-south-1.amazonaws.com/moode-media/${eachPost.url}`} key={eachPost.postID}/>
                                                                            <div className="post_detail_play_button_style1 click_class" onClick={()=> {setMOdalIsOpen(true);setURL(eachPost.videoId);}}>
                                                                                <img alt="playbutton" className="post_play_icon" src={playButton} />
                                                                            </div>
                                                                        </div>
                                                                      )}
                                                                 else if(eachPost.type === 6) {
                                                                    return (
                                                                        <div>
                                                                            <ModalVideo  channel={isyt?'youtube':'vimeo'} autoplay isOpen={isOpen} videoId={`${videoID}`} onClose={() => {setOpen(false);setVideoID("")}} />
                                                                            <img alt="workpic" className="work-pic hoverimg" src={`${eachPost.linkThumb}`} key={eachPost.postID}/>
                                                                            <div className="post_detail_play_button_style1 click_class" >
                                                                                <img alt="workpic" className="post_play_icon" src={playButton} onClick={()=>{setOpen(true);handleUrl(eachPost.url)}}/>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                                })()}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            </div>
                                    </div> 
                                    <div className="actions actions-desktop">
                                        <div className="b-row small-gutters">
                                            <a href="mailto:contact@talentopedia.com">
                                                <div className="b-col">
                                                    <button className="btn  btnMessage">Contact</button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                 </div>
                 <div className="paginate-row">
                        <ReactPaginate
                          previousLabel={"Prev"}
                          nextLabel={"Next"}
                          breakLabel={"..."}
                          breakLinkClassName={"break-me"}
                          pageCount={pageCount}
                          marginPagesDisplayed={1}
                          pageRangeDisplayed={1}
                          onPageChange={handlePageClick}
                          containerClassName={"pagination"}
                          subContainerClassName={"pages pagination"}
                          activeClassName={"active-page"}
                        />
                    </div>
                 </>
                  ):(<div className="no-user-exist">
                    <div className="no-user-text ">No Data Exists... </div>
                </div>)}
            </>
        </div>
    )
}

export default Hire;