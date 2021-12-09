import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Video from "../Video/Video.mp4";

const WorkSolution = () => {
  return (
    <>
      <div className='text-center '>
        <h3 className='py-3'>Work Solo, or as a team</h3>

        <p className='text-center m-3'>
          Whether you're on your own or part of a small, big, local, or global
          team, get all your work and communication done here, on-brand
          everytime.
        </p>
      </div>

      <Row className='py-3'>
        <Col>
          <ul style={{ padding: 0 }}>
            <li className='list-unstyled py-3'>
              {" "}
              <i class='far fa-folder'></i> <strong> Team folders </strong> to
              help you stay organised, store brand assets, and manage content
            </li>
            <li className='list-unstyled py-3'>
              {" "}
              <i class='fas fa-mobile-alt'></i>
              <strong> Plan, create, schedule and publish </strong> your social
              media posts directly from Canva{" "}
            </li>
            <li className='list-unstyled py-3'>
              <i class='fas fa-users'></i>{" "}
              <strong> Real-time collabration</strong> across countries,
              companies and departments{" "}
            </li>
            <li className='list-unstyled py-3'>
              {" "}
              <i class='fas fa-comment-medical'></i>{" "}
              <strong> Built-in comments</strong> to communicate, work and
              resolve suggestions in real time{" "}
            </li>
          </ul>
        </Col>

        <Col>
          <video
            width='500'
            height='310'
            loop={true}
            autoPlay={true}
            muted={true}
          >
            <source src={Video} type='video/mp4' />
          </video>
        </Col>
      </Row>

      <div className='py-3 text-center'>
        <Button>See work Solution</Button>
      </div>
    </>
  );
};

export default WorkSolution;
