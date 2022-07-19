import React from "react";

function Quiz(props) {
    return (
        <div className="quiz">
            <div className="quiz--question">{props.question}</div>
            <div className="quiz--answers">
                <span>Answer 1</span>
                <span>Answer 2</span>
                <span>Answer 3</span>
                <span>Answer 4</span>
            </div>
        </div>
    )
}

export default Quiz