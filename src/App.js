import React from "react";
import CodingJournal from "./components/CodingJournal/";
import CodingTask from "./components/CodingTask/";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Jaime's Coding Journal</h1>
      </header>
      <div className="row">
        <CodingJournal title="Thoughts for the day" subtitle="Thoughts" />
        <CodingTask title="Daily Task" subtitle="Task" />
      </div>
    </div>
  );
}

export default App;
