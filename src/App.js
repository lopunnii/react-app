import logo from './logo.svg';
import ToDoListApp from './ToDoList.js'
import { IncrementButton, ChangeColorButton } from './OdinHooksPractice.js'
import PokemonStarters from './PokemonStarters';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoListApp></ToDoListApp>

      <h2>The Odin Project Hooks Practice</h2>
      <IncrementButton></IncrementButton>
      <ChangeColorButton></ChangeColorButton>

      <PokemonStarters></PokemonStarters>

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
