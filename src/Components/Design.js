import React from "react";
import { Row, Col, Button } from "react-bootstrap";


function Design() {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom right, #66ffff 0%, #0066ff 100%)",
      }}
      className='text-center py-3 '
    >
      <h1 style={{ color: "white" }}>What will you Design ?</h1>

      <Row>
        <Col>
          <Button variant='info'>
            <i class='fas fa-star'></i>
          </Button>
          <p>For You</p>
        </Col>

        <Col>
          <Button variant='info'>
            <i class='fas fa-puzzle-piece'></i>
          </Button>
          <p>Presentation</p>
        </Col>

        <Col>
          <Button variant='info'>
            <i class='fas fa-user'></i>
          </Button>
          <p> Social Media </p>
        </Col>

        <Col>
          <Button variant='info'>
            <i class='fas fa-video'></i>
          </Button>
          <p>Video</p>
        </Col>

        <Col>
          <Button variant='info'>
            <i class='fas fa-print'></i>
          </Button>
          <p>PrintProducts</p>
        </Col>

        <Col>
          <Button variant='info'>
            <i class='fas fa-envelope-open-text'></i>
          </Button>
          <p> Marketing</p>
        </Col>

        <Col>
          <Button variant='info'>
            <i class='fas fa-laptop-house'></i>
          </Button>
          <p> Office</p>
        </Col>

        <Col>
          <Button variant='info'>
            <i class='fas fa-angle-double-right'></i>
          </Button>
          <p> More</p>
        </Col>
      </Row>
    </div>
  );
}

export default Design;
