import React from 'react'
import { Button, Card, InputGroup } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";

const Note = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <div className='d-flex'>
           <InputGroup.Checkbox></InputGroup.Checkbox>
        </div>
        
        
        <Button variant="primary">ujjk</Button>
      </Card.Body>
    </Card>
  )
}

export default Note