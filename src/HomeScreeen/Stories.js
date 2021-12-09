import React from "react";
import { Card } from "react-bootstrap";

const Stories = (props) => {
  console.log(props.description);
  return (
    <>
      <Card className='my-3 p-3 rounded' style={{ border: "none" }}>
        <a href={props.story.src}>
          <Card.Img src={props.story.image} variant='top' />
        </a>
        <Card.Body>
          <Card.Text>{props.story.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Stories;
