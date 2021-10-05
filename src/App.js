import { useState } from 'react';
import './App.css';
import OtherForm from './components/OtherForm';
import RandomForm from './components/RandomForm';

const initialValues = {
  randomOne: 'j',
  randomTwo: 'r'
}

function App() {
  const [values, setValues] = useState(initialValues)
  const handleChanges = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }
  return (
    <div className="App">
      <RandomForm />
      <br />
      <OtherForm />
      <br />
      <br />
      <input name="randomOne" onChange={handleChanges} value={values.randomOne} />
      <input name="randomTwo" onChange={handleChanges} value={values.randomTwo} />
    </div>
  );
}

export default App;
