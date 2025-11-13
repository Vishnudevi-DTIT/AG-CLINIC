import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FacialTreatment from "../assets/facial-treatment.png";

function BookAppoint() {
  return (
    <section
      className="py-2 d-flex justify-content-center align-items-center bg-white"
      style={{ backgroundColor: "#f8fbff", marginBottom: " -8px" }}
    >
      <Container
        className="shadow-sm p-0 fluid"
        style={{
          marginTop:"10px",
          borderTopLeftRadius: "40px",
          WebkitBorderTopRightRadius: "40px",
          borderBottomLeftRadius: "0px",
          backgroundColor: "#fff",
          overflow: "hidden", // curved edges
          borderColor: "black",
        }}
      >
        <Row className="align-items-center g-0">
          <Col
            md={6}
            className="text-center text-md-start p-5"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "34px",
                color: "#2b7ab9",
                lineHeight: "1.3",
              }}
            >
              Make Your Health a <br /> Priority – Book Today
            </h2>

            <Button
              className="mt-4"
              style={{
                background: "linear-gradient(90deg, #2b7ab9, #38abe1)",
                border: "none",
                borderRadius: "50px",
                padding: "12px 30px",
                fontWeight: "600",
                fontFamily: "Poppins",
                fontSize: "16px",
              }}
            >
              Book Appointment
            </Button>
          </Col>

          <Col
            md={6}
            className="p-2"
            style={{
              backgroundImage: `url(${FacialTreatment})`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              height: "350px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
          ></Col>
        </Row>
      </Container>
    </section>
  );
}

export default BookAppoint;
