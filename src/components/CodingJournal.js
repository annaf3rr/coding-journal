import React from "react";
import "./CodingJournal.css";

const CodingJournal = () => {
  return (
    <div>
      <header>
        <h1>Jaime's Coding Journal</h1>
      </header>
      <form className="codingForm">
        <h2>Thoughts for the Day</h2>
        <input type="text" />
        <br />
        <button>Save</button>
        <button>Clear</button>
        <h3>Thoughts for the Day</h3>
        <label>Date:</label>
        <input type="date" />
        <ol>
          <li>I woke up</li>
          <li>I can smell the flowers</li>
          <li>My lunch is delicious</li>
        </ol>
        <input type="date" />
        <h3>It's been a fruitful week</h3>
      </form>
    </div>
  );
};

export default CodingJournal;
