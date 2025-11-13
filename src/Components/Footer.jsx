import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import logo from "../assets/Logo.png"; 
import { FiChevronRight } from "react-icons/fi";

function Footer() {
  return (
<footer className="text-light py-5  " 
style={{ background: "linear-gradient(to right, #133b6d, #0b2c53)",
  fontFamily:"Poppins"
 }}

>

<Container>
        <Row className="gy-4">
         
          <Col md={3}>
            <img
              src={logo}
              alt="AG Clinic"
              className="img-fluid mb-3"
              style={{ maxWidth: "160px" }}
            />
            <p>
              Care for yourself and your loved ones with expert support from AG Clinic.
            </p>
            <div className="d-flex gap-3 fs-4">
              <FaFacebookF />
              <FaInstagram />
              <FaTimes />
            </div>
          </Col>

          
          <Col md={3}>
            <h5 className="fw-bold mb-3 "
            style={{
                    fontSize: "25px",
                  }}>Our Services</h5>
            <ul className="list-unstyled"
            style={{
                    fontSize: "15px",
                   
                   
                  }}>
              <li><FiChevronRight className="me-2 text-info " />General Consultation</li>
              <li><FiChevronRight className="me-2 text-info my-2  " />Diabetes care</li>
              <li><FiChevronRight className="me-2 text-info my-2"  />Skin treatments</li>
              <li><FiChevronRight className="me-2 text-info my-2" />Hair treatments</li>
              <li><FiChevronRight className="me-2 text-info my-2" />Cosmetic Products</li>
            </ul>
          </Col>

          
          <Col md={3}>
            <h5 className="fw-bold mb-3"
            style={{
                    fontSize: "25px",
                  }}>Our Links
              
            </h5>
            <ul className="list-unstyled"
            style={{
                    fontSize: "15px",
                  }}>
              <li><FiChevronRight className="me-2 text-info my-2  "/>About us</li>
              <li><FiChevronRight className="me-2 text-info my-2" />Services</li>
              <li><FiChevronRight className="me-2 text-info my-2" />Team</li>
              <li><FiChevronRight className="me-2 text-info my-2" />Blog</li>
              <li><FiChevronRight className="me-2 text-info my-2" />Contact us</li>
            </ul>
          </Col>

         
          <Col md={3}>
            <h5 className="fw-bold mb-3"
            style={{
                    fontSize: "25px",
                  }}>Get in touch</h5>
            <p className="mb-1"style={{
                    fontSize: "15px",
                  }}>
              <FiPhoneCall className="me-2 my-2" />
              +91 9890109265
            </p>
            <p className="mb-0">
              <FiMapPin className="me-2 my-2"  />
             
              Plot No. 44/45, First Street, Karups Nagar Extn,<br />
              Opp. To Meenakshi Hospital,<br />
              Near New Bus Stand,<br />
              Thanjavur – 613 005.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
