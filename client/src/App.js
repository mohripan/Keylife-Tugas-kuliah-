import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="Name">Name: </label>
      <input type="text" name="Name" />
      <label htmlFor="Age">Age: </label>
      <input type="number" name="Age" />
      <label htmlFor="Country">Country: </label>
      <input type="text" name="Country" />
      <label htmlFor="Position">Position: </label>
      <input type="text" name="Position" />
      <label htmlFor="Gender">Gender: </label>
      <input type="text" name="Gender" />
      <label htmlFor="Salary">Salary (per year): </label>
      <input type="number" name="Salary" />
    </div>
  );
}

export default App;