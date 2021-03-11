import React from 'react'

function StudentGroups(props) {

    let sixthgraders = props.gradeGroups[6].map(student => {
        return (
            <li>
                {student}
            </li>
        )
    })

    let seventhgraders = props.gradeGroups[7].map(student => {
        return (
            <li>
                {student}
            </li>
        )
    })

    let eigthgraders = props.gradeGroups[8].map(student => {
        return (
            <li>
                {student}
            </li>
        )
    })

    return (
        <>
        <ul>
            <b>6th Grade:</b>
            {sixthgraders}
        </ul>
        <ul>
            <b>7th Grade: </b>
            {seventhgraders}
        </ul>
        <ul>
            <b>8th Grade:</b> 
            {eigthgraders}
        </ul>
        </>
    )
}

export default StudentGroups