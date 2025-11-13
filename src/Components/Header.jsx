import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/Logo.png";

function Header() {
  return (
    <header className="Header py-4">
      <div className="container">
        <div className="row align-items-center gy-3 gy-md-0">
          {/* --- Logo --- */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <img
              src={Logo}
              alt="AG Clinic Logo"
              className="img-fluid"
              style={{ width: "180px", maxWidth: "100%" }}
            />
          </div>

          {/* --- Contact Info --- */}
          <div className="col-12 col-md-6 text-center">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
              {/* Phone */}
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center me-2"
                  style={{
                    backgroundColor: "#e6f3fc",
                    width: "35px",
                    height: "35px",
                  }}
                >
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div className="text-start">
                  <p
                    className="mb-0 fw-bold"
                    style={{
                      fontSize: "14px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Phone Number
                  </p>
                  <p
                    className="mb-0 fw-bold"
                    style={{
                      color: "#38ABE1",
                      fontSize: "15px",
                    }}
                  >
                    +91 9890876536
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center me-2"
                  style={{
                    backgroundColor: "#e6f3fc",
                    width: "35px",
                    height: "35px",
                  }}
                >
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="text-start">
                  <p
                    className="mb-0 fw-bold"
                    style={{
                      fontSize: "14px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Email Account
                  </p>
                  <p
                    className="mb-0 fw-bold"
                    style={{
                      color: "#38ABE1",
                      fontSize: "15px",
                    }}
                  >
                    agclinic@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Button --- */}
          <div className="col-12 col-md-3 text-center text-md-end">
            <button
              className="btn fw-bold text-white px-4 py-2"
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
    </header>
  );
}

export default Header;
