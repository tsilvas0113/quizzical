import React from "react";
import { nanoid } from "nanoid";

function Questions(props) {

    const regex = /(&quot;)|(&#039;t)|(&#039;s)|(&#039;)|(&amp;!)|(&amp;)|(&uuml;)/gi;
    const otherRegex = /&eacute;/gi;

    const answersElement = props.answers.map(answer => {
        return answer.map(item => {
            return (
                <button key={item.id}>{item.value}</button>
            )
        }) 
    })

    const questionElement = props.question.map((question, i) => {
        return (
            <div className="quiz">
                <div className="quiz--questions" key={question.id}>
                    <div>{question.value}</div>
                </div>
                <div className="quiz--answers">
                    {answersElement[i]}
                </div>
            </div>
        )
    })

    return (
        <div>
            {questionElement}
        </div>
    )
}

export default Questions