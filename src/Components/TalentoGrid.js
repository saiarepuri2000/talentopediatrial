import React,{useState,useEffect} from "react";
import "./TalentoGrid.css"
import tplogo from "../resources/icons/tplogo.png"
import hiring from "../resources/icons/Hiring.png"
import {Link} from "react-router-dom"
import serachlogo from "../resources/icons/search.webp"
import Loader from "./Loader"

function TalentoGrid(){
   const [searchTerm,setSearchTerm] = useState('');
   const [cards,setCards] = useState([]);
   const [loading,setLoading] = useState(true);
   const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ 
            sessionID:"kaERcIziuaMvgsxX",
            careerName: "web",
            deviceName: "browser",
            pageID: 1,
            platform: "browser",
            time: "2021-5-18 13:43:33",
            timeZone: "Asia/Calcutta",
         })
   };

   useEffect(()=>{
      const getPosts = async () => {
         try{
            fetch("https://talentopedia.in:8443/foodies-app/app/getTalentForm",requestOptions)
            .then(responce => responce.json())
            .then((data)=>{setCards(data.getTalentForm.talentTypeModel); setLoading(false)})
         } catch(err) {
                 alert(err.message)
         }
      }
      getPosts();
  },[])
   

    return(
        <div className="row clearfix">
           <div className="main_right_col">
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
              <section className="connect-page-container">
                 <div className="containergrid">
                    <div className="coll-business-name-head">
                       Hire the top freelancers around the world
                    </div>
                    <img className="search-icon" alt="search icon" src={serachlogo}/>
                    <input className="tbsearchbar" placeholder="Search Skill Type" onChange={event=>{setSearchTerm(event.target.value)}} style={{fontSize:"16px",marginBottom:"8px"}}/>
                    {loading?(<Loader/>):(
                    <div className="user-container col-md-12">
                       {cards.filter((val)=>{
                          if(searchTerm===''){
                             return val;
                          } else if(val.type.toLowerCase().includes(searchTerm.toLowerCase())){
                             return val;
                          }
                       }).map((eachcard)=>{
                          return (       
                              <div key={eachcard.id}>
                                 <div>
                                    <Link to={`/Hire/${eachcard.id}`}>
                                    <img className="cardimage hoverable talent-image" alt={eachcard.type} src={`https://s3.ap-south-1.amazonaws.com/moode-media/${eachcard.imageName}`}/>
                                    </Link>
                                    <div className="coll-business-name">{eachcard.type}</div>
                                    
                                 </div>
                              </div>)
                       })}
                    </div>)}
                 </div>
              </section>
           </div>
        </div>
      
    )
}
export default TalentoGrid;