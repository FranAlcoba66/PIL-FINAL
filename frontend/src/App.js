import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { Container, Row, Col, Card } from 'react-bootstrap'
import axios from 'axios'
import { useState,useEffect } from 'react';



function App() {

  const [todos,setTodos] =useState([])

  const getTodos = async () => {
    try {
      const  response = await axios.get('/todo/v1/todo')
      const {data} =response
      setTodos(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getTodos()
  },[])


  return (

    <div className='wrapper'>
      <Container>
        <Row className='justify-content-center pt-5'>
          <Col>
            <Card className='p-5'>
              <h3>My Todos</h3>
              <AddTodo />
              {todos.map((todo, index) =>(
                <Todo id={todo.id} title={todo.title} description={todo.description}></Todo>
              ))}

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
