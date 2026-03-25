import { useState } from 'react';
import TodoApp from './examples/TodoApp';
import './App.css';

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className="app-container">
      <h1> Sync State Engine Demo</h1>

      <button onClick={() => setShowTodos((prev) => !prev)}>
        {showTodos ? 'Hide Todos' : 'Show Todos'}
      </button>

      <hr />

      {showTodos && <TodoApp />}
    </div>
  );
}

export default App;