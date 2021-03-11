import React from 'react'
import Student from './Student'

function Students(props) {

    let students = props.studentsData.map(student => {
        return (
            <li key={student._id.$oid}>
                <Student
                    student={student}
                />
            </li>
        )
    })

    return (
        <div className='StudentsContainer'>
            <h1>Students</h1>
            <ul>
                {students}
            </ul>
        </div>
    )
}

export default Students