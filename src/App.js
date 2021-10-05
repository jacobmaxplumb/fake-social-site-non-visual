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
  return (
    <div className="App">
      <RandomForm />
      <br />
      <OtherForm />
      <br />
      <br />
      <input value={values.randomOne} />
      <input value={values.randomTwo} />
    </div>
  );
}

export default App;
