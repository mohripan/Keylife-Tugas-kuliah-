import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    Axios.post('http://localhost:9000/create', {name: name, age: age, country: country, position: position,wage: wage}).then((response) => {
      console.log('Success');
    })
  }

  return (
    <div className="App">
      <div className="Information">
        <label htmlFor="Name">Name: </label>
        <input type="text" name="Name" onChange={(e) => {setName(e.target.value);}} />
        <label htmlFor="Age">Age: </label>
        <input type="number" name="Age" onChange={(e) => {setAge(e.target.value);}} />
        <label htmlFor="Country">Country: </label>
        <input type="text" name="Country" onChange={(e) => {setCountry(e.target.value);}} />
        <label htmlFor="Position">Position: </label>
        <input type="text" name="Position" onChange={(e) => {setPosition(e.target.value);}} />
        <label htmlFor="Salary">Salary (per year): </label>
        <input type="number" name="Salary" onChange={(e) => {setWage(e.target.value);}} />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;