import React from "react";
import { nanoid } from "nanoid";

function Quiz(props) {

    const regex = /(&quot;)|(&#039;t)|(&#039;s)|(&#039;)|(&amp;!)|(&amp;)|(&uuml;)/gi;
    const otherRegex = /&eacute;/gi;

    const answerElements = props.answers.map(item =>{
        return (
            <button key={nanoid()}>{item.replace(regex, "").replace(otherRegex, "e")}</button>
        )    
    })

    return (
        <div className="quiz">
            <div className="quiz--questions">{props.question.replace(regex, "").replace(otherRegex, "e")}</div>
            <div className="quiz--answers">
                {answerElements}
            </div>
        </div>
    )
}

export default Quiz