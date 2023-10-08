import React, { useState } from 'react'
import "./quiz.scss"
import Navbar from '../../components/navbar/Navbar'
import mall from "../../assets/mall.png"
import TwoTextAresForms from './components/TwoTextAresForms'
import AnswerAllt from './components/AnswerAllt'
import { lasforstaelse2 } from "./questions/questions"

type Props = {}

const Quiz = (props: Props) => {

    const [quizOrder, setQuizOrder] = useState(1)





    return (
        <div className='quiz'>
            <Navbar setQuizOrder={setQuizOrder} />
            {/* <img src={mall} alt="" /> */}
            <div className="mainContent">

                {lasforstaelse2.map((quiz_question, i) => {
                    if (quiz_question.type === "answerAlt") {
                        if (quizOrder === quiz_question.order) {
                            return <AnswerAllt key={i} quiz_question={quiz_question} />
                        }

                    } else if (quiz_question.type === "textarea") {
                        if (quizOrder === quiz_question.order) {
                            return <TwoTextAresForms key={i} quiz_question={quiz_question} />
                        }
                    }

                })}

            </div>
        </div>
    )
}

export default Quiz





