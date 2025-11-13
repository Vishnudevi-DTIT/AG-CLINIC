import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import OffersBG from "../assets/OffersBG.png";
import OffersArrow from "../assets/OfferArrow.png";
import Consult from "../assets/Consult.png"
import Diabetes from "../assets/Diabetes.png"
import Skin from "../assets/Skin.png"
import HairTreatment from "../assets/HairTreatment.png"
import Cosmetic from "../assets/Cosmetic.png"
function Offers() {
  return (
    <section className="offers-section py-5 " >
      <Container className="text-center  ">
        <h6 className="section-heading fw-bold">
          What We Offer
        </h6> 
        

       <h2 className="fw-bold mb-5 my-5"
        style={{
          fontSize:"35px",
          letterSpacing:"-0.3px",
          fontFamily:"Poppins",
        }}>
          Revitalize Your Health, Explore <br /> Our Expert Services
        </h2> 
        

        <Row className="g-4 justify-content-center   "
       >
        <Col md={6} lg={4}>
  <div className="svg-card position-relative  my-5">
    {/* SVG Shape Background */}
    <svg
      className="card-svg-bg"
      viewBox="0 0 400 330"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
        M30 0 
            H350 
            a30 30 0 0 1 30 30 
            V230
            q0 40 -40 40 
            q-70 -10 -60 100 
            H40 
            a30 30 0 0 1 -30 -30 
            V30
            A30 30 0 0 1 30 0 
            Z
        "
        fill="white"
        stroke="rgba(0,0,0,0.05)"
        strokeWidth="1"
      />
    </svg>

    {/* Actual Card Content */}
    <div className="svg-card-content text-center p-4">
      <img src={Consult} alt="Consultation" className="service-icon mb-3" />
      <h5
        className="fw-bold"
        style={{
          color: "#38ABE1",
          fontFamily: "Poppins",
          fontSize: "25px",
        }}
      >
        General Consultation
      </h5>
      <p
        className="text-muted small"
        style={{ fontFamily: "Poppins", fontSize: "13px" }}
      >
        Treatment for fever, infections, and common illnesses. Preventive health
        check-ups for early detection and wellness.
      </p>

      {/* Blue Corner Icon */}
      <div className="corner-icon"
      style={{
        marginBottom:"-40px",
        marginRight:"10px"
      }}> 
      
        <img src={OffersArrow} alt="Arrow Icon" 
        />
      </div>
    </div>
  </div>
</Col>

          

          
          <Col md={6} lg={4}>
  <div className="svg-card position-relative mb-5">
    {/* SVG Shape Background */}
    <svg
      className="card-svg-bg "
      viewBox="0 0 400 330"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
         M30 0 
            H350 
            a30 30 0 0 1 30 30 
            V230
            q0 40 -40 40 
            q-70 -10 -60 100 
            H40 
            a30 30 0 0 1 -30 -30 
            V30
            A30 30 0 0 1 30 0 
            Z
        "
        fill="white"
        stroke="rgba(0,0,0,0.05)"
        strokeWidth="1"
      />
    </svg>

    {/* Actual Card Content */}

    <div className="svg-card-content text-center p-4 ">
      <img src={Diabetes} alt="Consultation" className="service-icon mb-3" />
      <h5
        className="fw-bold"
        style={{
          color: "#38ABE1",
          fontFamily: "Poppins",
          fontSize: "25px",
        
        }}
      >
       Diabetes Care
      </h5>
      <p
        className="text-muted small"
        style={{ fontFamily: "Poppins", fontSize: "13px" }}
      >
        Expert care for Type 1, Type 2, and prediabetes. Personalized plans with lifestyle guidance and treatment. Helping you stay healthy and prevent complications.
      </p>

      {/* Blue Corner Icon */}
       <div className="corner-icon"
       style={{
        
        
        marginBottom:"-25px",
        marginRight:"10px"
      
       }}
     
      >
        <img src={OffersArrow} alt="Arrow Icon" />
      </div>
    </div>
  </div>
</Col>


          
          <Col md={6} lg={4}>
  <div className="svg-card position-relative">
    {/* SVG Shape Background */}
    <svg
      className="card-svg-bg"
      viewBox="0 0 400 330"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M30 0 
            H350 
            a30 30 0 0 1 30 30 
            V230
            q0 40 -40 40 
            q-70 -10 -60 100 
            H40 
            a30 30 0 0 1 -30 -30 
            V30
            A30 30 0 0 1 30 0 
            Z
        "
        fill="white"
        stroke="rgba(0,0,0,0.05)"
        strokeWidth="1"
      />
    </svg>

    {/* Actual Card Content */}
    <div className="svg-card-content text-center p-4 my-5">
      <img src={Skin} alt="Consultation" className="service-icon mb-3" />
      <h5
        className="fw-bold"
        style={{
          color: "#38ABE1",
          fontFamily: "Poppins",
          fontSize: "25px",
        }}
      >
        Skin Treatments
      </h5>
      <p
        className="text-muted small"
        style={{ fontFamily: "Poppins", fontSize: "13px" }}
      >
        Comprehensive care for acne, pigmentation, and allergies. Advanced dermatology solutions for all skin types.Restoring healthy, glowing, and confident skin.
      </p>

      {/* Blue Corner Icon */}
      <div className="corner-icon"
       style={{
        
        
        marginBottom:"-25px",
        marginRight:"10px"
      
       }}>
        <img src={OffersArrow} alt="Arrow Icon" />
      </div>
    </div>
  </div>
</Col>

          
         <Col md={6} lg={4}>
  <div className="svg-card position-relative">
    {/* SVG Shape Background */}
    <svg
      className="card-svg-bg"
      viewBox="0 0 400 330"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M30 0 
            H350 
            a30 30 0 0 1 30 30 
            V230
            q0 40 -40 40 
            q-70 -10 -60 100 
            H40 
            a30 30 0 0 1 -30 -30 
            V30
            A30 30 0 0 1 30 0 
            Z
        "
        fill="white"
        stroke="rgba(0,0,0,0.05)"
        strokeWidth="1"
      />
    </svg>

    {/* Actual Card Content */}
    <div className="svg-card-content text-center p-4">
      <img src={HairTreatment} alt="Consultation" className="service-icon mb-3" />
      <h5
        className="fw-bold"
        style={{
          color: "#38ABE1",
          fontFamily: "Poppins",
          fontSize: "25px",
        }}
      >
        Hair Treatments
      </h5>
      <p
        className="text-muted small"
        style={{ fontFamily: "Poppins", fontSize: "13px" }}
      >
        Specialized care for hair fall, dandruff, and scalp issues.Advanced trichology solutions for stronger, healthier hair. Revive your confidence with expert hair restoration.
      </p>

      {/* Blue Corner Icon */}
      <div className="corner-icon "
style={{
         marginBottom:"-25px",
        marginRight:"10px"
      
       }}      >
        <img src={OffersArrow} alt="Arrow Icon" />
      </div>
    </div>
  </div>
</Col>

         
          <Col md={6} lg={4}>
  <div className="svg-card position-relative">
    {/* SVG Shape Background */}
    <svg
      className="card-svg-bg"
      viewBox="0 0 400 330"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M30 0 
            H350 
            a30 30 0 0 1 30 30 
            V230
            q0 40 -40 40 
            q-70 -10 -60 100 
            H40 
            a30 30 0 0 1 -30 -30 
            V30
            A30 30 0 0 1 30 0 
            Z
        "
        fill="white"
        stroke="rgba(0,0,0,0.05)"
        strokeWidth="1"
      />
    </svg>

    {/* Actual Card Content */}
    <div className="svg-card-content text-center p-4">
      <img src={Cosmetic} alt="Consultation" className="service-icon mb-3" />
      <h5
        className="fw-bold"
        style={{
          color: "#38ABE1",
          fontFamily: "Poppins",
          fontSize: "25px",
        }}
      >
        Cosmetic Procedures
      </h5>
      <p
        className="text-muted small"
        style={{ fontFamily: "Poppins", fontSize: "13px" }}
      >
        Enhance your natural beauty with safe, advanced treatments. From anti-aging solutions to skin rejuvenation, we provide tailored care. Achieve lasting results with expert hands and modern 
technology.
      </p>

      {/* Blue Corner Icon */}
      <div className="corner-icon"
      style={{
        
        
        marginBottom:"-3px",
        marginRight:"10px"
      
       }}>
        <img src={OffersArrow} alt="Arrow Icon" />
      </div>
    </div>
  </div>
</Col>

        </Row>
      </Container>
    </section>
  );
}

export default Offers;


