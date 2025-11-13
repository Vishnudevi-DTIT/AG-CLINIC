import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GirlDoct from "../assets/GirlDoct.png";
import Profile from "../assets/Profile.jpg";
import "../Styles/Feedback.css";

function Feedback() {
  return (
    <div
      className="container feedback-container"
      style={{
        fontFamily: "Poppins",
        marginTop: "150px",
      }}
    >
      <div
        className="card border-0 shadow-lg text-white feedback-card"
        style={{
          background: "linear-gradient(90deg, #055CA3 0%, #02233D 100%)",
        }}
      >
        <div className="row g-0 align-items-center flex-column flex-md-row">
          {/* Image Section */}
          <div className="col-md-5 text-center position-relative">
            <img
              src={GirlDoct}
              alt="Doctor"
              className="img-fluid rounded-start GirlDoc-img"
            />
          </div>

          {/* Content Section */}
          <div className="col-md-7 p-4 text-center text-md-start">
            <div className="card-body">
              <h4 className="feedback-heading">What Our Client Says</h4>

              <div className="svg-card position-relative mx-auto p-4 mt-4">
                {/* SVG Bubble Background */}
                <svg
                  className="card-svg-bg position-absolute top-0 start-0 w-100 h-100"
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

                {/* Content */}
                <div className="card-content position-relative">
                  <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                    <img
                      src={Profile}
                      alt="Client"
                      className="rounded-circle shadow me-sm-3 mb-3 mb-sm-0"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                        border: "3px solid #fff",
                      }}
                    />
                    <h5
                      className="fw-bold mb-0 fs-4"
                      style={{
                        color: "#38ABE1",
                      }}
                    >
                      R. Venkatesh
                    </h5>
                  </div>

                  <p className="text-muted mt-3 mb-0 fw-medium feedback-text">
                    I took the PRP treatment for hair fall and the results have
                    been amazing. The staff explained everything clearly and
                    made me feel comfortable throughout.
                  </p>

                  <div className="quote-icon">❞</div>
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
