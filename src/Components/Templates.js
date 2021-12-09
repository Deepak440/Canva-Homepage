import React from "react";
import { Card } from "react-bootstrap";
const Templates = (props) => {
  return (
    <div style={{ height: "300px", width: "300px" }}>
      <a href={props.template.src}>
        <Card.Img src={props.template.image} variant='top' />
      </a>
    </div>
  );
};

export default Templates;
