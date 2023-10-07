import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Container, Row, Col, Image } from 'react-bootstrap';
import prison1 from './images/prison-image1.jpg'; 
// import prison2 from './images/prison-image2.jpg'; 
// import prison3 from './images/prison-image3.jpg'; 

const About = () => {
  return (
    <Container className="my-5">
      <h1 className='text-center my-4'>ABOUT OUR PROGRAM</h1>
      <Row className='my-4'>
        <Col  md={4}>
          <Image src={prison1} alt="Mission" fluid />
        </Col>
        <Col md={8}>
          <div className="about-us-section">
            <h2>Our Mission</h2>
            <p>
              At PrisonEd, our mission is to transform lives behind bars by providing accessible, high-quality education that fosters personal growth, rehabilitation, and a path to a better future. We are dedicated to breaking down barriers to education within the correctional system and enabling incarcerated individuals to build a brighter tomorrow.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <Image src={prison1} alt="Goals" fluid />
        </Col>
        <Col md={8}>
          <div className="about-us-section">
            <h2>Our Goals</h2>
            <ul>
              <li>
                <strong>Rehabilitation:</strong> Our primary goal is to support the rehabilitation and personal growth of incarcerated individuals through education.
              </li>
              <li>
                <strong>Quality Education:</strong> We are dedicated to delivering top-notch educational content designed to foster skills and knowledge that can lead to meaningful employment and reduced recidivism.
              </li>
              <li>
                <strong>Flexible Learning:</strong> We aim to provide flexible learning options tailored to the unique needs of incarcerated learners.
              </li>
              <li>
                <strong>Community Building:</strong> Building a supportive learning community within correctional facilities is essential to us.
              </li>
              <li>
                <strong>Continuous Improvement:</strong> We are committed to continually improving our program and resources.
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <Image src={prison1} alt="Objectives" fluid />
        </Col>
        <Col md={8}>
          <div className="about-us-section">
            <h2>Our Objectives</h2>
            <ul>
              <li>
                <strong>Expanded Curriculum:</strong> Within the next year, we plan to broaden our curriculum, offering a diverse range of courses that enhance employability and personal development.
              </li>
              <li>
                <strong>Enhanced Accessibility:</strong> Over the next two years, we aim to make our program more accessible within correctional facilities by improving infrastructure and offering educational resources in various formats.
              </li>
              <li>
                <strong>Improved Learning Experience:</strong> Within six months, we will introduce a redesigned user interface that enhances ease of use and provides engaging learning experiences.
              </li>
              <li>
                <strong>Learner Engagement:</strong> To foster learner engagement, we will introduce peer support groups, mentorship programs, and opportunities for collaborative learning.
              </li>
              <li>
                <strong>Success Stories:</strong> Our goal is to showcase success stories of formerly incarcerated individuals who have transformed their lives through education.
              </li>
              <li>
                <strong>Community Growth:</strong> We aim to expand our program's reach within correctional facilities, ensuring that more incarcerated individuals can benefit from our offerings.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
