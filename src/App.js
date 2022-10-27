import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

const names = ['Gustavo', 'Gerly', 'Cassandra', 'Corwin',
  'Jaques', 'Ainis', 'Gianna', 'Emily', 'Fanessa', 'Adi', 'Mido', 
  'Cari','Eddie', 'Captain Ed', 'Nick'
  , 'Tyler', 'Todd', 'Brad']

function App() {
  const [myName, setMyName] = useState('Emily,')
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} This is cool!
        </p>
        {names.map(name => (
          <button key={name} onClick = {() => setMyName(name)}>{name}</button>
        ))}

        <button onClick={() => setMyName('Ashley,')}>Ashley</button>
        <button onClick={() => setMyName('Randy,')}>Randy</button>
        <button onClick={() => setMyName('Angela,')}>Angela</button>
        <button onClick={() => setMyName('Emily,')}>Emily</button>
        <p>You clicked the button {counter} times</p>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>- 1</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </header>
    </div>
  );
}

export default App;
