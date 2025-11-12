import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhoneAlt } from "react-icons/fa";
import DocImg from "../assets/Doctor.jpg";
function Service() {
  return (
    <div
      className="container py-5"
      style={{
        fontFamily: "Poppins",
      }}
    >
      <div className="row align-items-center">
        <div className="col-md-7 ">
          <h6 className="fw-bold text-primary mb-2">
            <span
              className="  service-heading"
          
            >
              
              Our Services
            </span>
          </h6>
          <br />

          <h2
            className="fw-bold mb-4"
            style={{
              fontSize: "40px",
            }}
          >
            We don’t just improve your <br /> well-being we safeguard <br />
            your health.
          </h2>

          <p
            className="text-muted"
            style={{
              fontSize: "22px",
            }}
          >
            AG Clinic delivers complete care, medical to cosmetic, <br /> under
            one roof. Our expert team treats every patient with <br />
            skill and empathy. Feel healthy, look great, and live confidently.
          </p>
        </div>

      
        <div className="col-md-5 text-center mt-4 mt-md-0 position-relative">
         
          <img
            src={DocImg}
            alt="Doctor"
            className="img-fluid w-90 rounded-5 shadow-sm"
            style={{
              marginTop:"90px",
            
              width: "350px",
              minHeight: "600px",
              objectFit: "cover",
            }}
          />

          
          <div
            className="d-flex flex-wrap justify-content-around align-items-center text-white py-4 rounded-bottom-5 border border-3 border-top-0 border-start-0 border-end-0 border-light-subtle position-absolute start-50 translate-middle-x shadow-sm support-bar"
            style={{
             backgroundColor: "#06213B",
    bottom: "0",
    right: "0",
   
    borderTop: "2px solid rgba(255,255,255,0.1)",
         marginLeft:"-168px"   
              
             
            }}
          >
          
            <div className="d-flex align-items-center mb-2 mb-md-0">
              <div
                className="bg-info bg-opacity-25 rounded-circle d-flex justify-content-center align-items-center me-3"
                style={{ width: "60px", height: "60px"}}
              >
                <FaPhoneAlt size={24} className="text-info" />
              </div>
              <h5 className="mb-0 fw-bold "
              style={{
                fontSize:"25px"
              }}
              
              >24x7 Support</h5>
            </div>

           
            <div className="d-flex align-items-center">
              <div
                className="bg-info bg-opacity-25 rounded-circle d-flex justify-content-center align-items-center me-3"
                style={{ width: "60px", height: "60px" }}
              >
                <FaPhoneAlt size={24} className="text-info" />
              </div>
              <h5 className="mb-0 fw-bold"
              style={{
                fontSize:"25px"
              }}>24x7 Support</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
