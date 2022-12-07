import React from  'react'
import {Form,Button } from 'react-bootstrap'
const AppTodo =() =>{
    return (
      <form>
        <Form.Group controlId="title"></Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter todo title"></Form.Control>

        <Form.Group controlId="title"></Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter todo description"></Form.Control>

        <Button variant='primary' type="submit">Add Todo</Button>
      </form>
    );
  }

export default AppTodo;