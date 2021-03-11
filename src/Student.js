import React from 'react'

function Student(props) {

    const { name, grade, scores } = props.student

    let scoresInfo = scores.map(score => {
        return (
            <li>
                {score.subject} - {score.value}
            </li>
        )
    })

    return (
        <>
            <b>Name:</b> {name} - <b>Grade:</b> {grade}
            <ul>
                {scoresInfo}
            </ul>
        </>
    )
}

export default Student