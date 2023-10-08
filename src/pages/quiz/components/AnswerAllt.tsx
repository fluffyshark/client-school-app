import React from 'react'
import "./answerAllt.scss"

type Props = {
    quiz_question: any
}

const AnswerAllt = ({ quiz_question }: Props) => {
    return (
        <div className='answerAlt'>
            <div className="answerAlt_questionArea">
                <p style={{ width: `${quiz_question.questionWith}` }}>{quiz_question.question}</p>
            </div>
            <div className="answerAlt_answerArea">

                <div id="answerA" className="answerAlt"><p>{quiz_question.alt1}</p></div>
                <div id="answerB" className="answerAlt"><p>{quiz_question.alt2}</p></div>
                <div id="answerC" className="answerAlt"><p>{quiz_question.alt3}</p></div>
                <div id="answerD" className="answerAlt"><p>{quiz_question.alt4}</p></div>

            </div>
        </div>
    )
}

export default AnswerAllt