import React from "react";
import "./CodingTask.css";

const CodingTask = () => {
  return (
    <div className="myJournal">
      <form>
        <h2>Daily Task</h2>
        <input type="text" />
        <br />
        <button>Save</button>
        <button>Clear</button>
        <h3>Task</h3>
        <label>Date:</label>
        <input type="date" checkbox="" />
        <h4>Take a Javascript quiz</h4>
        <label>Date:</label>
        <input type="date" checkbox="" />
        <h4>Review React useState and useEffect</h4>
        <label>Date:</label>
        <input type="date" checkbox="" />
        <h4>Create React page using Material UI</h4>
      </form>
    </div>
  );
};

export default CodingTask;
