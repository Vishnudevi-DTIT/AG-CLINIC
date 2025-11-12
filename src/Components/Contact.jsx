import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    
    <section className="py-5 bg-light">
      <Container className="p-4 bg-white rounded-4 shadow-sm" style={{ maxWidth: "900px", marginLeft: "40px" }}>
       
        <h3 className="fw-bold text-primary mb-3">
          Stay Connected for Complete Health & Wellness
        </h3>
        <p className="text-secondary mb-4" style={{ maxWidth: "700px" }}>
          Stay connected with AG Clinic for personalized, expert care across
          general health, diabetes, skin, hair, and cosmetic needs.
        </p>

       
        <Row className="gy-3">
          <Col sm={6} md={6}>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <FaMapMarkerAlt color="#3b82f6" className="me-2" />
                  <strong>Address</strong>
                </div>
                <p className="mb-0 small text-secondary">
                  Plot No. 44/45, First Street, Opp. To Meenakshi Hospital, New
                  Bus Stand, Thanjavur – 613005.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={6}>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <FaClock color="#3b82f6" className="me-2" />
                  <strong>Working Hours</strong>
                </div>
                <p className="mb-0 small text-secondary">
                  Mon - Sat : 7.00 AM – 10.00 PM <br />
                  Sunday : 7.00 AM – 3.00 PM
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={6}>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <FaEnvelope color="#3b82f6" className="me-2" />
                  <strong>Send us a Mail</strong>
                </div>
                <p className="mb-0 small text-secondary">agclinic@gmail.com</p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={6}>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Body>
                <div className="d-flex align-items-center mb-2">
                  <FaPhoneAlt color="#3b82f6" className="me-2" />
                  <strong>Contact Us</strong>
                </div>
                <p className="mb-0 small text-secondary">+91 9890109265</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
