import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Todolist = (props) => {
  const styleS = {
    color: "#cccccc",
  };
  const deleteTask = (index) => {
    const newTask = [...props.todo];
    newTask.splice(index, 1);
    props.setTodo(newTask);
  };
  const completedTask = (index) => {
    const newTask = [...props.todo];
    newTask[index].isCompleted = !newTask[index].isCompleted;
    props.setTodo(newTask);
  };
  return (
    <ul className="p-0">
      {props.todo.map((todo, index) => {
        return (
          <li
            className="d-flex align-items-center border p-2 mb-2 rounded"
            key={index}
          >
            <span className="col-10 text-break form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={`check-${index}`}
                checked={todo.isCompleted}
                onChange={() => completedTask(index)}
              />
              <label className="form-check-label" htmlFor={`check-${index}`}>
                {todo.isCompleted ? (
                  <s style={styleS}>{todo.task}</s>
                ) : (
                  todo.task
                )}
              </label>
            </span>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <Button
                onClick={() => deleteTask(index)}
                type="button"
                variant="danger"
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Todolist;
