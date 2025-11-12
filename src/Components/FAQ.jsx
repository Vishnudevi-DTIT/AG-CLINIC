import React from "react";
import { Container, Row, Col, Accordion, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctor3 from "../assets/Doctor3.jpg";
import Doctor2 from "../assets/Doctor2.jpg";
function FAQ() {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0 text-center">
            <h3 className="fw-bold Faq-heading">FAQ</h3>

            <h2
              className="fw-bold mb-3"
              style={{
                fontFamily: "Poppins",
                color: "#000",
                marginTop: "30px",
                fontSize: "40px",
              }}
            >
              Need Help? <span className="text-dark">We’re here for you</span>
            </h2>

            <p
              className="text-muted mb-4"
              style={{ fontFamily: "Poppins", fontSize: "18px" }}
            >
              Our support team is always ready to assist with setup, updates, or
              any questions. At AG Clinic, your peace of mind is our priority.
            </p>

            <Accordion defaultActiveKey="0">
              <Accordion.Item
                eventKey="0"
                className="mb-3 border rounded shadow-sm "
              >
                <Accordion.Header className=" Main">
                  What are the main services offered at AG Clinic?
                </Accordion.Header>
                <Accordion.Body>
                  We offer expert care in General Medicine, Diabetes Management,
                  Skin & Hair Treatments, and Cosmetic Procedures.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="1"
                className="mb-3 border rounded shadow-sm  "
              >
                <Accordion.Header className="Main">
                  Are your cosmetic treatments safe?
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely! All procedures are performed by certified experts
                  using advanced technology and safe materials.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="2"
                className="mb-3 border rounded shadow-sm"
              >
                <Accordion.Header className="Main">
                  What hair treatments do you offer?
                </Accordion.Header>
                <Accordion.Body>
                  We provide solutions for hair fall, dandruff, and scalp care —
                  ensuring healthier, stronger hair.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="3"
                className="mb-3 border rounded shadow-sm"
              >
                <Accordion.Header className="Main">
                  Is walk-in consultation available?
                </Accordion.Header>
                <Accordion.Body>
                  Yes! We welcome both walk-ins and scheduled appointments.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item
                eventKey="4"
                className="mb-3 border rounded shadow-sm"
              >
                <Accordion.Header className="Main">
                  Where is AG Clinic located?
                </Accordion.Header>
                <Accordion.Body>
                  We’re located conveniently in the city center, easy to reach
                  for all patients.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col lg={6} className="text-center">
            <div className="position-relative d-inline-block ">
              <Image
                src={Doctor2}
                alt="Doctor Consultation"
                fluid
                rounded
                className="shadow w-80 doctor-img "
                />

              <Image
                src={Doctor3}
                alt="Cosmetic Treatment"
                fluid
                rounded
                className="shadow position-absolute start-50 w-75 nborder border-white person-img"
                style={{
                  height: "425px",
                  objectFit: "cover",
                  
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FAQ;