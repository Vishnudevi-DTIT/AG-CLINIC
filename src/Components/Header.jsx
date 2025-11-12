import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/Logo.png";

function Header() {
  return (
    <div className=" Header">
      <div className="container py-5 " style={{ marginLeft: "-5px" }}>
        <div className="row align-items-center">
          <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
            <img src={Logo} alt="AG Clinic Logo" style={{ width: "200px" }} />
          </div>

          <div className="col-md-6 text-center">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center me-2"
                  style={{
                    backgroundColor: "#e6f3fc",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <FaPhoneAlt className="text-primary" />
                </div>

                <div className="text-start">
                  <p
                    className="mb-0 fw-bold "
                    style={{
                      fontSize: "15px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Phone Number
                  </p>
                  <p
                    className="mb-0  fw-bold fs-6"
                    style={{ color: " #38ABE1" }}
                  >
                    +91 9890876536
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center me-2"
                  style={{
                    backgroundColor: "#e6f3fc",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="text-start">
                  <p
                    className="mb-0 fw-bold"
                    style={{
                      fontFamily: "Poppins",
                    }}
                  >
                    Email Account
                  </p>
                  <p
                    className="mb-0 fw-bold  "
                    style={{
                      color: "#38ABE1",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                    }}
                  >
                    agclinic@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 text-center text-md-end mt-3 mt-md-0">
            <button
              className="btn px-4 py-3 fw-bold text-white"
              style={{
                border: "none",
                borderRadius: "30px",
                background: "linear-gradient(90deg, #055CA3 0%, #269AF9 100%)",
              }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
