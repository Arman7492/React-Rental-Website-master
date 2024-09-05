import React from "react";
import "../../styles/become-instructor.css";
import { Container, Row, Col } from "reactstrap";

import instructorImg from "../../assets/all-images/ski.jpg";

const BecomeInstructorSection = () => {
  return (
    <section className="become__instructor">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__instructor-img">
            <img src={instructorImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__instructor-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="btn become__instructor-btn mt-4">
              Become an Instructor
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeInstructorSection;
