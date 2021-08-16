import React from "react";

const TaskCard = ({ taskDate, taskDescription }) => {
  return (
    <div>
      DATE: {taskDate}
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input className="form-check-input mt-0" type="checkbox" value="" />
        </div>
        <div className="form-control">{taskDescription}</div>
      </div>
    </div>
  );
};

export default TaskCard;
