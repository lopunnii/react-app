import logo from './logo.svg';
import List from './List.js'
import { IncrementButton, ChangeColorButton } from './OdinHooksPractice.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>

      <List></List>
        <h2>The Odin Project Hooks Practice</h2>
      <IncrementButton></IncrementButton>
      <ChangeColorButton></ChangeColorButton>

      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
