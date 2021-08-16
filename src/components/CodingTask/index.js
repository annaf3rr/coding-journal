import React, { useState, useEffect } from "react";
import TaskCard from "../CodingJournal/TaskCard.js";

const retrieveData = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : [];

function CodingTask({ title, subtitle }) {
  const [task, setTask] = useState(retrieveData);
  const [taskDate, setTaskDate] = useState();
  const [taskDescription, setTaskDescription] = useState();

  const saveTask = () => {
    setTask([
      ...task,
      {
        taskDate,
        taskDescription,
      },
    ]);
  };
  const clearTask = () => {
    setTask([]);
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="col-md-6">
      <div className="codingForm">
        <div className="myDay">
          <h2>{title}</h2>
          <div className="row my-3">
            <div className="col-md-6">
              <input
                type="date"
                onChange={(e) => setTaskDate(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-end col-md-6">
              <button className="btn btn-outline-primary" onClick={saveTask}>
                <i className="uil uil-save"></i>SAVE
              </button>
              <button className="btn btn-outline-secondary" onClick={clearTask}>
                <i className="uil uil-trash-alt"></i>CLEAR
              </button>
            </div>
          </div>
          <textarea
            type="text"
            rows="2"
            onChange={(e) => setTaskDescription(e.target.value)}
            className="form-control"
            placeholder="Input something"
          ></textarea>
        </div>
        <div className="myDay1">
          <h3>{subtitle}:</h3>
        </div>

        {task &&
          task.map(({ taskDate, taskDescription }) => (
            <TaskCard taskDate={taskDate} taskDescription={taskDescription} />
          ))}
      </div>
    </div>
  );
}

export default CodingTask;
