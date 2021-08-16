import React from "react";
import "./index1.css";

function CodingTask() {
  return (
    <div className="col-md-6">
      <div className="codingTask1">
        <div className="myDay">
          <h2>Daily Task</h2>
          <div className="row my-3">
            <div className="col-md-6">
              <input type="date" />
            </div>
            <div className="d-flex justify-content-end col-md-6">
              <button className="btn btn-outline-primary">
                <i className="uil uil-save"></i>SAVE
              </button>
              <button className="btn btn-outline-secondary">
                <i className="uil uil-trash-alt"></i>CLEAR
              </button>
            </div>
          </div>
          <textarea
            type="text"
            rows="2"
            placeholder="Add Task"
            className="form-control"
          ></textarea>
        </div>
        <h3>Task:</h3>
      </div>
    </div>
  );
}

export default CodingTask;
