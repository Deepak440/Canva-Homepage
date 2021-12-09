import React from 'react'
import { Card } from 'react-bootstrap';

function DesignCard(props) {
    return (
        <>
         
         <Card className = 'my-3 p-3 rounded' style = {{border : 'none'}}>
             <a href = {props.design.src}>
             <Card.Img src = {props.design.image} variant ='top' /> 
             </a>
             
             <Card.Body>
                 <Card.Text>
                     <strong>{props.design.title} </strong>
                 </Card.Text>
             </Card.Body>
         </Card>
           
        </>
    )
}

export default DesignCard;
