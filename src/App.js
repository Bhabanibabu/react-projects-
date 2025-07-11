import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple ToDo App</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
