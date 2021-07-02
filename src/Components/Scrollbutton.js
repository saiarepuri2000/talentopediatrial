import React ,{useState} from "react";
import {FaArrowCircleUp} from "react-icons/fa";
import "./Scrollbutton.css";

function Scrollbutton() {
    const [visible,setvisible] = useState(false);
    function toggleVisible(){
        const scrolled = document.documentElement.scrollTop;
        if(scrolled>300){
            setvisible(true);
        } else if(scrolled<=300) {
            setvisible(false);
        }
    }
    function scrolltoTop(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    };
    window.addEventListener('scroll',toggleVisible);
    return(
            <FaArrowCircleUp className="button" onClick={scrolltoTop} style={{display:visible?"inline":"none"}} size='10x'/>
    )
}

export default Scrollbutton;