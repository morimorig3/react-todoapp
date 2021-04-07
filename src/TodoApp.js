import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const APP_NAME = 'TODO_APP!'

const TodoApp = () => {
    const initTodo = () => (
        JSON.parse(localStorage.getItem(APP_NAME)||'[]')
    )
    const [todo, setTodo] = useState(initTodo)
    const [task, setTask] = useState('')
    const [disabled, setdisabled] = useState(true)

    useEffect(() => {
        writeLocalStrage()
    })
    const writeLocalStrage = () => {
        localStorage.setItem(APP_NAME, JSON.stringify(todo))
    }

    const enterTask = (e) => {
        if(e.target.value){
            setdisabled(false)
        } else {
            setdisabled(true)
        }
        setTask(e.target.value)
    }
    const addTask = (e) => {
        e.preventDefault()
        if(task === '') return
        setTodo(todo => [...todo, {task: task, isCompleted:false}])
        setTask('')
        setdisabled(true)
    }
    const deleteTask = (index) => {
        const newTask = [...todo]
        newTask.splice(index, 1)
        setTodo(newTask)
    }
    return (
        <Container className="py-sm-4 py-2">
            <Row>
                <Col><h1 className="font-weight-bold">TO DO APP</h1></Col>
            </Row>
            <Row className="mb-3">
                <Col>
                <Form onSubmit={addTask}>
                    <Form.Row className="align-items-center">
                        <Col xs={12} sm={10}>
                            <Form.Control
                                required
                                type="text"
                                placeholder=""
                                autoComplete="off"
                                value={task}
                                onChange={enterTask}
                            />
                        </Col>
                        <Col xs={12} sm={2}>
                            <Button type="submit" variant="primary" disabled={disabled} block>
                                追加
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className="p-0">
                        {todo.map((todo, index) => (                            
                            <li className="d-flex align-items-center border p-2 mb-2 rounded" key={index}>
                                <span className="col-10 text-break">{todo.task}</span>
                                <div className="col-2 d-flex align-items-center justify-content-center">
                                    <Button onClick={() => deleteTask(index)} type="button" variant="danger">×</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default TodoApp