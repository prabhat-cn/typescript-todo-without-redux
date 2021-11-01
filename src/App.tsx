import './App.css';
import TodoTask from './page/TodoTask';
import Tutorial from './page/Tutorial';

function App() {
  return (
    <div className="App" data-test="component-app">
      <h1>Hello Todo!</h1>
      <Tutorial />
      <TodoTask />
    </div>
  );
}

export default App;
