import './App.css';
import StudentsData from './students.json'
import Students from './Students'

function App() {

  return (
    <div className="App">
      
      <h1>Students Technical Task</h1>

      <button>Group By Grade</button>
      
      <button>Find Lowest Average</button>

      <Students studentsData={StudentsData} />


    </div>
  )

}

export default App
