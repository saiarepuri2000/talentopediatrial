import React,{useEffect,useState} from "react";
import {Card,Col} from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../resources/icons/Appdevelopment.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Freelance.css"
import "bootstrap"
import {Link} from "react-router-dom";

import Loader from "./Loader";

function Freelance() {
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
      timeZone: "Asia/Calcutta"})
};

   useEffect(()=>{
      const getPosts = async () => {
        try{
          fetch("https://talentopedia.in:8443/foodies-app/app/getWebTalentForm",requestOptions)
          .then(responce => responce.json())
          .then((data)=>{setCards(data.getTalentForm.talentTypeModel); setLoading(false);})
          
        } catch(err) {
                alert(err.message)
        }
    }
       getPosts()
   },[]);
    
   let settings = {
      dots: false,
      infinite: true,
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
      <div className=" max-width-container" style={{paddingBottom:"80px"}}>
       <div className="subcategory-carousel lohp-row">
         <div className="empowertext">
            Choose from over 100,000+ handpicked freelancers
         </div>
         <div className="slider-package">
           {loading?<Loader/>:
          <Slider {...settings} >
             {
                cards.map((eachcard)=>{
                  return(
                  <Col className="user-container row" key={eachcard.id}>
                  <Card className="subcategory-wrapper">
                    <Link to={`/Hire/${eachcard.id}`} className="ihover">
                     <Card.Img
                     style={{borderRadius:"8px"}}
                     variant="top"
                     src={`https://s3.ap-south-1.amazonaws.com/moode-media/${eachcard.imageName}`}
                     />
                   </Link>
                  </Card>
               </Col>)
                })
             } 
             <Col className="user-container row" >
                  <Card className="subcategory-wrapper">
                    <Link to="/TalentoGrid" className="ihover">
                     <Card.Img
                     style={{borderRadius:"8px"}}
                     variant="top"
                     src={img1}
                     />
                   </Link>
                  </Card>
               </Col>
         </Slider>}
         
         </div>
       </div>
      </div>
   )
};

export default Freelance;