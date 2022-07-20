import React from "react";
import { nanoid } from "nanoid";

function Quiz(props) {

    const answerElements = props.answers.map(item =>{
        return (
            <button key={nanoid()}>{item}</button>
        )    
    })

    return (
        <div className="quiz">
            <div className="quiz--questions">{props.question}</div>
            <div className="quiz--answers">
                {answerElements}
            </div>
        </div>
    )
}

export default Quiz