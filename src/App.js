import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('first');
  const [lastName, setLastName] = useState('last');
  const [email, setEmail] = useState('email');

  return (
    <div className="App">
      <form>
        <input value={firstName}/>
        <input value={lastName}/>
        <input value={email}/>
      </form>
    </div>
  );
}

export default App;
