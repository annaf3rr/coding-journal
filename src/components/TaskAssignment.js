import React from "react";
import { useState } from "react";

const TaskAssignment = ({ AddTaskLog }) => {
  const [TaskDesc, setTaskDesc] = useState();
  const [Name, setName] = useState();
  const [TaskDate, setDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    AddTaskLog([TaskDesc, Name, TaskDate]);
    // console.log(TaskDesc);
    // console.log(Name);
    // console.log(Date);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Task Description</label>
        <input
          type="text"
          name="task"
          value={TaskDesc}
          onChange={(e) => {
            setTaskDesc(e.target.value);
          }}
        />

        <label>Assigned to:</label>
        <input
          type="text"
          name="assign"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={TaskDate}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />

        <input type="submit" value="Add task" />
      </form>
    </div>
  );
};

export default TaskAssignment;
