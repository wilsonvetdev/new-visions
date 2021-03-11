import './App.css';
import StudentsData from './students.json'
import Students from './Students'
import StudentGroups from './StudentGroups'

function App() {

  const groupByGrade = students => {
    let gradeDict = {}

    students.forEach(student => {
      if (gradeDict[student.grade]) {
        gradeDict[student.grade] = [student, ...gradeDict[student.grade]]
      } else {
        gradeDict[student.grade] = [student]
      }
    })

    return gradeDict
  }

  
  const calculateAverage = students => {
    let gradeDict = groupByGrade(StudentsData)

    gradeDict[6].forEach(student => {
      let scoreSum = 0
      let numOfScores = student.scores.length
      let avg = 0

      student.scores.forEach(score => {
        scoreSum += score.value
        avg = scoreSum / numOfScores
      })

      student['average'] = avg

    })

    gradeDict[7].forEach(student => {
      let scoreSum = 0
      let numOfScores = student.scores.length
      let avg = 0

      student.scores.forEach(score => {
        scoreSum += score.value
        avg = scoreSum / numOfScores
      })

      student['average'] = avg

    })

    gradeDict[8].forEach(student => {
      let scoreSum = 0
      let numOfScores = student.scores.length
      let avg = 0

      student.scores.forEach(score => {
        scoreSum += score.value
        avg = scoreSum / numOfScores
      })

      student['average'] = avg

    })

    return gradeDict
  }

  const findLowestAvg = students => {
    let gradeDict = calculateAverage(students)

    let sortedSixthGraders = gradeDict[6].sort((studentA, studentB) => {
      return studentA.average - studentB.average
    })
    let sortedSeventhGraders = gradeDict[7].sort((studentA, studentB) => {
      return studentA.average - studentB.average
    })
    let sortedEighthGraders = gradeDict[8].sort((studentA, studentB) => {
      return studentA.average - studentB.average
    })

    let lowestSixthGrader = sortedSixthGraders[0]
    let lowestSeventhGrader = sortedSeventhGraders[0]
    let lowestEigthGrader = sortedEighthGraders[0]

    return [lowestSixthGrader, lowestSeventhGrader, lowestEigthGrader]
  }

  
  let lowestGradesStudentsArray = findLowestAvg(StudentsData)

  let displayLowestGradesStudents = lowestGradesStudentsArray.map(student => {
    return(
      <li>
        <b>Grade:</b> {student.grade} -
        -<b>Name:</b> {student.name} -
        -<b>Average:</b> {student.average}
      </li>
    )
  })


  return (
    <div className="App">
      
      <h1>Technical Task</h1>

      <h1>Lowest Average</h1>
      {displayLowestGradesStudents}

      <h1>Students Grouped By Grade</h1>

      <StudentGroups gradeGroups={groupByGrade(StudentsData)} />

      <Students studentsData={StudentsData} />

    </div>
  )

}

export default App
