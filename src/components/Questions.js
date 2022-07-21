import React from "react";
import { nanoid } from "nanoid";

function Questions(props) {

    const regex = /(&quot;)|(&#039;t)|(&#039;s)|(&#039;)|(&amp;!)|(&amp;)|(&uuml;)/gi;
    const otherRegex = /&eacute;/gi;

    const answersElement = props.answers.map(answer => {
        return answer.map(item => {
            const styles = {
                backgroundColor: item.isHeld ? "#0dffd2" : "#0d0208",
                color: item.isHeld ? "#0d0208" : "#00ff41"
            }
            return (
                <button key={item.id} style={styles} onClick={(e) => props.holdAnswer(e, item.id)}>{item.value.replace(regex, "").replace(otherRegex, "e")}</button>
            )
        }) 
    })

    const questionElement = props.question.map((question, i) => {
        return (
            <div className="quiz">
                <div className="quiz--questions" key={question.id}>
                    <div>{question.value.replace(regex, "").replace(otherRegex, "e")}</div>
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
            <div className="bottom">
                <button className="check-btn">Check answers</button>
            </div>
        </div>
    )
}

export default Questions