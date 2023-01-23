
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const NoteForm = () => {

    const createData = async()=> {await  axios.post(`https://63c2f14db0c286fbe5f6a342.mockapi.io/api/v1/todos`)}

    const[note,setMode] = useState({
        id:"",
        message:"",
        completed:false
    })

    const createNote= (e)=>{

    }

    


  return (
    


    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter your ..." />

      </Form.Group>

      <Button variant="primary" type="submit" >
        Create Note
      </Button>
    </Form>
  );
}



export default NoteForm