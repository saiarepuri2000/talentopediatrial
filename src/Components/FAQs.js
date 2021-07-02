import React from "react";
import "./FAQs.css";

function FAQs(){
    return(
       <section id="FAQs">
          <div className="faq-main-container">
             <div className="work-text-head-faq">
                Freequently Asked Questions
             </div>
             <div className="faq-container">
               <div className="faq-item">
                  <div className="accordion">
                    <div>
                        <input className="accordion__input" id="section1" name="exapmle_accordion" type="radio"/>
                        <label className="accordion__label" for="section1">How can I join Talentopedia as a freelancer?</label>
                        <div className="accordion__content">
                           <p style={{color:"#333"}}>
                           To join as a freelancer all you have to do is download the app on Android or IOS and signup using your FB or Google accounts. You will then have to select your freelance services and your experience level before filling out a few details. That’s all! Now you are registered on Talentopedia.
                           </p>
                        </div>
                    </div>
                    
                    <div>
                        <input className="accordion__input" id="section2" name="exapmle_accordion" type="radio"/>
                        <label className="accordion__label" for="section2">Is it free to join Talentopedia as a freelancer?</label>
                        <div className="accordion__content">
                           <p style={{color:"#333"}}>
                           Yes, it is completely free! Just download the app and login. There is no charge for creating your account. You will have the ability to build your Portfolio, Share and Market yourself, and Connect with inbound leads all for free.
                           </p>
                        </div>
                    </div>

                    <div>
                        <input className="accordion__input" id="section3" name="exapmle_accordion" type="radio"/>
                        <label className="accordion__label" for="section3">What Types of freelance services does Talentopedia have?</label>
                        <div className="accordion__content">
                           <p style={{color:"#333"}}>
                           Talentopedia offers freelance services from both creative and corporate industries. Our new 100000+ Professionals offers more than 250 services like Software Development, Digital Marketing, Design, Photography, Law, Finance and many more.
                           </p>
                        </div>
                    </div>

                    <div>
                        <input className="accordion__input" id="section4" name="exapmle_accordion" type="radio"/>
                        <label className="accordion__label" for="section4">How do I hire freelance services from Talentopedia?</label>
                        <div className="accordion__content">
                           <p style={{color:"#333"}}>
                           To hire a freelancer, simply click the “Hire a Freelancer” button and answer the questions in the form. We will get in touch with you in 24hrs. Alternatively, you can download our app and connect with over 1Lakh freelancers to hire their services.
                           </p>
                        </div>
                    </div>
                  </div>
               </div>
               
               <div className="faq-item">
                  <div className="accordion">
                    <div>
                        <input className="accordion__input" id="section5" name="exapmle_accordion" type="radio"/>
                        <label className="accordion__label" for="section5">Does Talentopedia take a commission on sales?</label>
                        <div className="accordion__content">
                           <p style={{color:"#333"}}>
                           Yes, Talentopedia takes a flat 15% commission when you hire a freelancer from our platform.
                           </p>
                        </div>
                    </div>
                    
                    <div>
                        <input className="accordion__input" id="section6" name="exapmle_accordion" type="radio"/>
                        <label className="accordion__label" for="section6">What are Business Management tools for Freelancers?</label>
                        <div className="accordion__content">
                           <p style={{color:"#333"}}>
                           The Business Management tools are a suite of premium tools, which include, Invoicing, Proposal & Contract Builder, CRM, Review Management, Business Card Scanner, Milestone Tracker and Task Manager. These tools help freelancers in striking the right balance between managing multiple clients and projects, delivering customised solutions to each client and keeping clients abreast with the project’s progress each step of the way.
                           </p>
                        </div>
                    </div>

                    <div>
                        <input className="accordion__input" id="section7" name="exapmle_accordion" type="radio"/>
                        <label className="accordion__label" for="section7">Are The Business management tools free or paid?</label>
                        <div className="accordion__content">
                           <p style={{color:"#333"}}>
                           The Business Management tools are available for a subscription fee of Rs. 1000/Month.
                           </p>
                        </div>
                    </div>

                    <div>
                        <input className="accordion__input" id="section8" name="exapmle_accordion" type="radio"/>
                        <label className="accordion__label" for="section8">How can I trust that the freelancers on Talentopedia are good?</label>
                        <div className="accordion__content">
                           <p style={{color:"#333"}}>
                           When you hire a freelancer from Talentopedia, we make sure that all our service providers are pre-vetted and approved through our rigorous verification process.
                           </p>
                        </div>
                    </div>

                  </div>
               </div>
             </div>
          </div>
       </section>
    );
}

export default FAQs