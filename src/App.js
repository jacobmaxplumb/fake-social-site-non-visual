import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({firstName: '', lastName: '', email: ''});
  console.log(values);
  // const [firstName, setFirstName] = useState('first');
  // const [lastName, setLastName] = useState('last');
  // const [email, setEmail] = useState('email');

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  // const handleFirst = e => {
  //   setFirstName(e.target.value);
  // }

  // const handleLast = (e) => {
  //   setLastName(e.target.value);
  // }

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // }

  return (
    <div className="App">
      {/* <form>
        <input name="firstName" onChange={handleFirst} value={firstName}/>
        <input onChange={handleLast} value={lastName}/>
        <input onChange={handleEmail} value={email}/>
      </form> */}
      <form>
        <input name="firstName" onChange={handleChanges} value={values.firstName}/>
        <input name="lastName" onChange={handleChanges} value={values.lastName}/>
        <input name="email" onChange={handleChanges} value={values.email}/>
      </form>
    </div>
  );
}

export default App;
