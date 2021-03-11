import React from 'react'
import Student from './Student'

function Students(props) {

    console.log(props.studentsData)

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
        <>
            <h1>Students</h1>
            <ul>
                {students}
            </ul>
        </>
    )
}

export default Students