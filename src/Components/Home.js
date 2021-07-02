import React from "react";
import "../App.css";
import Showcase from "./Showcase";
import Aboutus from "./Aboutus";
import Oursolutions from "./Oursolutions";
import Futurefreelancer from "./Futurefreelancer";
import Future from "./Future";
import Growth from "./Growthoftalentopedia";
import FAQs from "./FAQs";
import Join from "./Join";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Scrollbutton from "./Scrollbutton";
import Freelance from "./Freelance";
function Home() {
    return (
        <>
            <Navbar/>
            <Showcase/>
            <Aboutus/>
            <Oursolutions/>
            <Freelance/>
            <Futurefreelancer/>
            <Future/>
            <Growth/>
            <FAQs/>
            <Join/>
            <Footer/>
            <Scrollbutton/>
        </>
    )
}

export default Home;