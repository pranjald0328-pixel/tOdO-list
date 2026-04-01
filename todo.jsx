import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h2>React Todo List</h2>

      <div className="input-section">
        <input
          type="text"
          value={task}
          placeholder="Enter task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>
              {t.text}
            </span>
            <button className="delete" onClick={() => deleteTask(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
