import logo from './logo.svg';
import ToDoListApp from './ToDoList.js'
import { IncrementButton, ChangeColorButton } from './OdinHooksPractice.js'
import PokemonStarters from './PokemonStarters';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* To Do List */}
      <ToDoListApp></ToDoListApp>

      {/* The Odin Project練習 */}
      <h2>The Odin Project Hooks 練習</h2>
      <IncrementButton></IncrementButton>
      <ChangeColorButton></ChangeColorButton>

      {/* Props渡し練習 */}
      <h2>Props渡し練習</h2>
      <PokemonStarters></PokemonStarters>

      {/* フッター */}
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
