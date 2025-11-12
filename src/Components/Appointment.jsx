import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Appointment() {
  return (
    <div>
      <section
        className="py-5 bg-white"
        style={{
          fontFamily: "Poppins",
        }}
      >
        <Container>
          <Row className="g-4">
            
            <Col md={6}>
              <div className="appointment-box position-relative p-4 bg-white shadow-sm rounded-4 LeftSide">
                {/* --- Title --- */}
                <h3
                  className="fw-bold "
                  style={{
                    color: " #38ABE1",
                    fontSize: "45px",
                  }}
                >
                  Book An Appointment
                </h3>
                <p className="text-secondary">
                  We will send you a confirmation within 24 hours.
                </p>

                
                <Form>
                  <Row>
                    <Col md={6} className="mb-5">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        className="border-0 border-bottom border-primary rounded-0"
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        className="border-0 border-bottom border-primary rounded-0"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-5">
                      <Form.Control
                        type="text"
                        placeholder="Phone Number"
                        className="border-0 border-bottom border-primary rounded-0"
                      />
                    </Col>
                    <Col md={6} className="mb-5">
                      <Form.Control
                        type="text"
                        placeholder="Service Type"
                        className="border-0 border-bottom border-primary rounded-0"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col className="mb-5">
                      <Form.Control
                        rows={2}
                        placeholder="Message"
                        className="border-0 border-bottom border-primary rounded-0"
                      />
                    </Col>
                  </Row>

                  
                  <div className="d-flex justify-content-center mt-3">
                    <Button
                      variant="primary"
                      type="submit"
                      className="rounded-pill border-0 px-5 fs-5"
                      style={{
                        background:
                          "linear-gradient(90deg, #055CA3 0%, #269AF9 100%)",
                      }}
                    >
                      Submit →
                    </Button>
                  </div>
                </Form>

                
                <div
                  className="consultation-tab-vertical  text-white fw-medium  "
                  style={{
                    background:
                      "linear-gradient(90deg, #055CA3 0%, #269AF9 100%)",
                  }}
                >
                  Consultation Free
                </div>
              </div>
            </Col>

           
            <Col md={6}>
              <div className="p-4 bg-white rounded-4 RightSide">
                <h4
                  className="fw-bold mb-3 "
                  style={{
                    color: "#37ACE2",
                    fontSize: "31px",
                  }}
                >
                  Stay Connected for Complete <br /> Health & Wellness
                </h4>
                <p className=" mb-4">
                  Stay connected with AG Clinic for personalized,
                  <br /> expert care across general health, diabetes, skin,
                  <br /> hair, and cosmetic needs.
                </p>

                <Row className="gy-3">
                  <Col sm={6}>
                    <Card className="border-0 shadow-sm">
                      <Card.Body
                        style={{
                          backgroundColor: "#E9F7FC",
                        }}
                      >
                        <div className="d-flex align-items-center mb-2">
                          <FaMapMarkerAlt color="#3b82f6" className="me-2" />
                          <strong>Address</strong>
                        </div>
                        <p className="mb-0 small text-secondary">
                          Plot No. 44/45, First Street, Opp. To Meenakshi
                          Hospital, New Bus Stand, Thanjavur – 613005.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col sm={6}>
                    <Card className="border-0 shadow-sm">
                      <Card.Body
                        style={{
                          backgroundColor: "#E9F7FC",
                        }}
                      >
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

                  <Col sm={6}>
                    <Card className="border-0 shadow-sm">
                      <Card.Body
                        style={{
                          backgroundColor: "#E9F7FC",
                        }}
                      >
                        <div className="d-flex align-items-center mb-2">
                          <FaEnvelope color="#3b82f6" className="me-2" />
                          <strong>Send us a Mail</strong>
                        </div>
                        <p className="mb-0 small text-secondary">
                          agclinic@gmail.com
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col sm={6}>
                    <Card
                      className="border-0 shadow-sm"
                      style={{
                        backgroundColor: "#E9F7FC",
                      }}
                    >
                      <Card.Body>
                        <div className="d-flex align-items-center mb-2">
                          <FaPhoneAlt color="#3b82f6" className="me-2" />
                          <strong>Contact Us</strong>
                        </div>
                        <p className="mb-0 small text-secondary">
                          +91 9890109265
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Appointment;
