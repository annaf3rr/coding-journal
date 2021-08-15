import React from "react";
// import Header from "./components/Header";
// import Section from "./components/Section";
// import Footer from "./components/Footer";
// import Timer from "./components/Timer";
// import DisplayList from "./components/DisplayList";
// import TaskAssignment from "./components/TaskAssignment";
// import TaskDisplay from "./components/TaskDisplay";
// import { useState } from "react";
// import InventoryTracker from "./components/InventoryTracker";
import CodingJournal from "./components/CodingJournal";
import CodingTask from "./components/CodingTask";

function App() {
  // const [TaskLog, setTaskLog] = useState([]);
  // const AddTaskLog = (log) => {
  //   let Logs = [...TaskLog, log];
  //   setTaskLog(Logs);
  // };

  return (
    <div>
      <CodingJournal />
      <CodingTask />
      {/* <Header />
      <Timer /> */}
      {/* <InventoryTracker /> */}
      {/* <DisplayList />
      <TaskAssignment AddTaskLog={AddTaskLog} />
      <TaskDisplay List={TaskLog} />
      <Section />
      <Footer /> */}
    </div>
  );
}

export default App;
