import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import web1 from './images/AI.webp'

const Aintro = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Basic Education</h1>
          <p className="text-justify">
            Artificial Intelligence (AI) is a fascinating field that focuses on creating intelligent machines capable of performing tasks that typically require human intelligence. These tasks include problem-solving, decision-making, understanding natural language, and more.
          </p>
          <p className="text-justify">
            AI systems are designed to learn from data, adapt to new information, and improve their performance over time. They are used in various applications, from virtual assistants like Siri and Alexa to self-driving cars, healthcare diagnostics, and recommendation systems.
          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h2 className="text-center mb-4">Introductory Videos</h2>
          <Row>
            <Col md={6}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/J4RqCSD--Dg?si=_h-RpPvX3og-uzWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
            <Col md={6}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=sFHYNKBAYDKRq1eC&amp;list=PLp6ek2hDcoNB_YJCruBFjhF79f5ZHyBuz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </Col>
            <Col md={6} className='my-4'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JMUxmLyrhSk?si=CKizII0nXlcZeLZ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </Col>
            <Col md={6} className='my-4'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/h0e2HAPTGF4?si=SY5fZMNeNC76eLeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  );
};

export default Aintro;
