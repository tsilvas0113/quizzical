import React from "react";

function Quiz(props) {
    return (
        <div className="quiz">
            <div className="quiz--questions">{props.question}</div>
            <div className="quiz--answers">
                <button>Answer 1</button>
                <button>Answer 2</button>
                <button>Answer 3</button>
                <button>Answer 4</button>
            </div>
        </div>
    )
}

export default Quiz