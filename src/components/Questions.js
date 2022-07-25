import React from "react";

function Questions(props) {

    const regex = /(&quot;)|(&#039;t)|(&#039;s)|(&#039;)|(&amp;!)|(&amp;)|(&uuml;)|(&rsquo;)/gi;
    const otherRegex = /&eacute;/gi;

    const answersElement = props.answers.map(answer => {
        return answer.map(item => {
            const styles = {
                backgroundColor: item.isHeld ? "#0dffd2" : "#0d0208",
                color: item.isHeld ? "#0d0208" : "#00ff41"
            }
            const gameDoneStyle = {
                backgroundColor: item.isCorrect ? "#0dffd2" : item.isHeld ? "#e80400" : "#0d0208",
                color: item.isCorrect ? "#0d0208" : item.isHeld ? "#0dffd2" : "#00ff41",
                borderColor: item.isCorrect ? "#00ff41" : item.isHeld? "#e80400" : "#00ff41"
            }
            return (
                <button key={item.id} style={props.checkGame ? gameDoneStyle : styles} onClick={(e) => props.holdAnswer(e, item.id)}>{item.value.replace(regex, "").replace(otherRegex, "e")}</button>
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
        </div>
    )
}

export default Questions