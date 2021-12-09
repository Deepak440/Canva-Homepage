import React from "react";
import { Row, Col, CardGroup, Card, Button } from "react-bootstrap";

function Plans() {
  return (
    <div className='text-center py-3'>
      <h3> A perfect fit for every team </h3>

      <CardGroup>
        <Card className='p-3 my-3 rounded' style={{ border: "none" }}>
          <Card.Body>
            <Card.Title>Canva Free</Card.Title>
            <Card.Text>
              For people and teams wanting to design absolutely anything, from
              logos and social media content to documents, prints and more. Tons
              of free templates, phots and fonts to bring your vision of life.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ border: "none" }}>
            <Button variant='primary'>Get Canva Free </Button>
          </Card.Footer>
        </Card>

        <Card className='p-3 my-3 rounded' style={{ border: "none" }}>
          <Card.Body>
            <Card.Title>Canva Pro </Card.Title>
            <Card.Text>
              For people and teams wanting to collaborate and grow their
              buisness. Include social scheduling , team templates, brand
              management and other productivity tools
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ border: "none" }}>
            <Button variant='primary'> Start free trial </Button>
          </Card.Footer>
        </Card>

        <Card className='p-3 my-3 rounded' style={{ border: "none" }}>
          <Card.Body>
            <Card.Title>Canva Enterprise</Card.Title>
            <Card.Text>
              For the large organisations needing design and communication tools
              at scale. Simplfy your team's work with integrations to tools you
              use every day, advanced security and built-in approval workflows.
              Minium 20 users.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ border: "none" }}>
            <Button variant='primary'> Learn more </Button>
          </Card.Footer>
        </Card>
      </CardGroup>

      <p className='py-3'>
        {" "}
        Canva Pro is free from{" "}
        <a href='https://www.canva.com/education/'>Education </a>{" "}
        <span>and </span>{" "}
        <a href='https://www.canva.com/canva-for-nonprofits/'> nonprofits.</a>{" "}
      </p>

      <Row className='text-center py-3'>
        <Col>
          <h3>intel</h3>
        </Col>

        <Col>
          <h3>paypal</h3>
        </Col>

        <Col>
          <h3>UCDAVIS</h3>
        </Col>

        <Col>
          <h3> Baxter</h3>
        </Col>

        <Col>
          <h3> GUCCI</h3>
        </Col>

        <Col>
          <h3>DANONE</h3>
        </Col>
      </Row>
    </div>
  );
}

export default Plans;
