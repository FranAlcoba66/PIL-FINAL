import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

const Todo = ({id,title,description}) => {
  return (
    <>
      <Row className='border-bottom pt-3'>
        <Col md={1}>
          <Form>
            <Form.Check type="checkbox">

            </Form.Check>
          </Form>
        </Col>

        <Col>
          <h5>{title}</h5>
          <p>{description}</p>
        </Col>

        <Col md={2}>
          <Form>
            <Button variant='info' className='my-2 btn-block'>Edit</Button>
          </Form>

          <Form>
            <Button variant='danger' className='my-2 btn-block'>Delete</Button>
          </Form>
        </Col>
      </Row>
    </>

  );
}

export default Todo;