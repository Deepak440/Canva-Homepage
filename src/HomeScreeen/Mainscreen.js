import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Video1 from "../Video/Inspired.mp4";
import Video2 from "../Video/Collaborate.mp4";
import Image from "../Video/benefits-share.webp";

const Mainscreen = () => {
  return (
    <div className=' py-3'>
      <Row className='py-3'>
        <Col>
          <video
            width='500'
            height='310'
            loop={true}
            autoPlay={true}
            muted={true}
          >
            <source src={Video1} type='video/mp4' />
          </video>
        </Col>

        <Col>
          <h2>Start Inspired</h2>
          <p>
            With thousands of professional templates, images and quality content
            to choose from, get a headstart on bringing your best Ideas and work
            to life
          </p>

          <Button>Create a design</Button>
        </Col>
      </Row>

      <Row className='py-3'>
        <Col>
          <h2>Collaborate with ease</h2>

          <p>
            Invite people to edit with you or set your whole team up in Canva
            Pro to manage brand assets, leave feedback, get approvals, and scale
            your visual content.
          </p>

          <Button>Work together</Button>
        </Col>

        <Col>
          <video
            width='500'
            height='310'
            loop={true}
            autoPlay={true}
            muted={true}
          >
            <source src={Video2} type='video/mp4' />
          </video>
        </Col>
      </Row>

      <Row className='py-3'>
        <Col>
          <img src={Image} alt = '' width='500' height='310' />
        </Col>

        <Col>
          <h2>Share with pride</h2>

          <p>
            Whether you're preesenting, downloading,scheduling , sharing or
            printing, enjoy seeing your work make an impact in the real world.
          </p>

          <Button> Design your vision</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Mainscreen;
