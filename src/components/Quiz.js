import React from "react";
import { nanoid } from "nanoid";

function Quiz(props) {

    const regex = /(&quot;)|(&#039;t)|(&#039;s)|(&#039;)|(&amp;!)|(&amp;)|(&uuml;)/gi;
    const otherRegex = /&eacute;/gi;

    return (
        <div className="quiz">
            <div className="quiz--questions">reset</div>
            <div className="quiz--answers">
                <h1>reset</h1>
            </div>
        </div>
    )
}

export default Quiz