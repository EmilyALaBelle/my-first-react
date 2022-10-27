import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [myName, setmyName] = useState('Emily')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} This is cool!
        </p>
        <button onClick={() => setmyName('Ashley')}>Ashley</button>
        <button onClick={() => setmyName('Randy')}>Randy</button>
        <button onClick={() => setmyName('Angela')}>Angela</button>
      </header>
    </div>
  );
}

export default App;
