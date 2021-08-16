import React from "react";
import CodingJournal from "./components/CodingJournal/";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Jaime's Coding Journal</h1>
      </header>
      <div className="row">
        <CodingJournal title="Thoughts for the day" subtitle="Thoughts" />
        <CodingJournal title="Daily Task" subtitle="Task" />
      </div>
    </div>
  );
}

export default App;
