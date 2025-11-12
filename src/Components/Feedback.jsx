import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GirlDoct from "../assets/GirlDoct.png";
import Profile from "../assets/Profile.jpg";
<assets />;
function Feedback() {
  return (
    <div className="container  "
    style={{
      width:"100%",
      height:"100%",
      marginTop:"150px"
     
    }}>
     
      <div
        className="card border-0 shadow-lg text-white"
        style={{
          background: "linear-gradient(90deg, #055CA3 0%, #02233D 100%)",

          width: "100%",
        }}
      >
        <div className="row g-0 align-items-center"
       >
      
          <div className="col-md-5 text-center">
            <img
              src={GirlDoct}
              alt="Doctor"
              className="img-fluid rounded-start GirlDoc-img"
              style={{
               
                  borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    width: "750px",
    height: "600px",   
    marginleft:"-7px",       
        
    transform: "translateY(-120px)", 
  
    display: "block",
               
              }}
            />
          </div>

          
          <div className="col-md-7 p-4">
            <div className="card-body">
              <h4 className="feedback-heading fs-4"
              style={{
                top:"-70px"
              }}>What Our Client Says</h4>
              <br />
              
              <div
               className="svg-card position-relative mx-auto p-4"
                style={{
    width: "400px",
    maxWidth: "100%",
  }}>
    
    <svg
      className="card-svg-bg position-absolute top-0 start-0 w-100 h-100"
      viewBox="0 0 400 330"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zIndex: 0 }}
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
               
                <div
    className="card-content position-relative"
     style={{ zIndex: 1 }} 
  >
                <div className="d-flex align-items-center">
                  
                  <img
                    src={Profile}
                    alt="Client"
                    className="rounded-circle shadow me-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      marginTop:"30px",
                      border: "3px solid #fff",
                    }}
                  />

                  
                  <h5
                    className="fw-bold mb-0 fs-3"
                    style={{ color: "#38ABE1", fontFamily: "Poppins",
                      marginTop:"20px"
                     }}
                  >
                    R. Venkatesh
                  </h5>
                </div>

               
                <div className="mt-3 fw-bold">
                  <p
                    className="text-muted"
                    style={{ fontFamily: "Poppins", fontSize: "14px" }}
                  >
                    I took the PRP treatment for hair fall and the results have
                    been amazing. The staff explained everything clearly and
                    made me feel comfortable throughout.
      <div className="quote-icon"> 
❞</div>
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;

