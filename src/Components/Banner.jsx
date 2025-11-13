import React from "react";
import "../Styles/Banner.css";

import Bannerimg from "../assets/Bannerimg.jpg";
import { FaPhoneAlt } from "react-icons/fa";
function Banner() {
  return (
    <section >

      <div className="Container">
        <div className="img">
          <img src={Bannerimg} alt=" Labour Union members" />
        </div>

        <div className="Banner">
          <h1> Service</h1>
          <p>
            AG Clinic offers expert medical and cosmetic care under one roof,
            from general health to skin, hair, and diabetes treatment.Our
            personalized approach ensures safe, effective, and ethical care for
            every patient.
          </p>
        </div>
  <div className="contact d-flex align-items-center justify-content-center">
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
            <h5
              className="m-0 fw-semibold"
              style={{ color:  " #38ABE1", fontSize: "15px" }}
            >
              Call Us
            </h5>
            <p className="m-0" style={{ fontSize: "13px", color: "#333" }}>
              <a
                href="tel:+919890109265"
                style={{ textDecoration: "none", color: "#333" }}
              >
                +91 98901 09265
              </a>
            </p>
          </div>
     
        </div>
      </div>
    </section>
  );
}

export default Banner;
