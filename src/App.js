import './App.css';
import StudentsData from './students.json'
import Students from './Students'
import StudentGroups from './StudentGroups'

function App() {

  const groupByGrade = students => {
    let gradeDict = {}

    students.forEach(student => {
      if (gradeDict[student.grade]) {
        gradeDict[student.grade] = [student.name, ...gradeDict[student.grade]]
      } else {
        gradeDict[student.grade] = [student.name]
      }
    })

    return gradeDict
  }

  return (
    <div className="App">
      
      <h1>Students Technical Task</h1>

      <StudentGroups gradeGroups={groupByGrade(StudentsData)} />

      <Students studentsData={StudentsData} />

    </div>
  )

}

export default App
