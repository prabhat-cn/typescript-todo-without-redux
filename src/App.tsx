import './App.css';
import TodoTask from './page/TodoTask';
import Tutorial from './page/Tutorial';

function App() {
  return (
    <div className="App">
      <h1>Hello Todo!</h1>
      <Tutorial />
      <TodoTask />
    </div>
  );
}

export default App;
