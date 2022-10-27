import logo from './logo.svg';
import './App.css';

function App() {
  const myName = 'Emily'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} This is cool!
        </p>
        <a
          className="App-link"
          href="https://bocacode.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
