import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('first');
  const [lastName, setLastName] = useState('last');
  const [email, setEmail] = useState('email');

  const handleFirst = e => {
    setFirstName(e.target.value);
  }

  const handleLast = (e) => {
    setLastName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div className="App">
      <form>
        <input onChange={handleFirst} value={firstName}/>
        <input onChange={handleLast} value={lastName}/>
        <input onChange={handleEmail} value={email}/>
      </form>
    </div>
  );
}

export default App;
