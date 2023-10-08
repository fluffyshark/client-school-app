import React, { useState, useEffect } from 'react'
import "./quiz.scss"
import Navbar from '../../components/navbar/Navbar'
import TwoTextAresForms from './components/TwoTextAresForms'
import AnswerAllt from './components/AnswerAllt'
import { lasforstaelse2 } from "./questions/questions"

type Props = {}

const Quiz = (props: Props) => {

    const [quizOrder, setQuizOrder] = useState(0)
    const [studnetAnswers, setStudentAnswers] = useState([
        { nr: 0, question: `${lasforstaelse2[0].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 1, question: `${lasforstaelse2[1].question}`, answer1: "", answer2: "" },
        { nr: 2, question: `${lasforstaelse2[2].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 3, question: `${lasforstaelse2[3].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 4, question: `${lasforstaelse2[3].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 5, question: `${lasforstaelse2[3].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 6, question: `${lasforstaelse2[3].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 7, question: `${lasforstaelse2[3].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 8, question: `${lasforstaelse2[3].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 9, question: `${lasforstaelse2[3].question}`, answer1: "", answer2: "" },
    ])


    useEffect(() => {
        console.log("studnetAnswers", studnetAnswers)
    }, [studnetAnswers])


    return (
        <div className='quiz'>
            <Navbar setQuizOrder={setQuizOrder} />
            {/* <img src={mall} alt="" /> */}
            <div className="mainContent">

                {lasforstaelse2.map((quiz_question, i) => {
                    if (quiz_question.type === "answerAlt") {
                        if (quizOrder === quiz_question.order) {
                            return <AnswerAllt key={i} quiz_question={quiz_question} setStudentAnswers={setStudentAnswers} studnetAnswers={studnetAnswers} quizOrder={quizOrder} setQuizOrder={setQuizOrder} />
                        }

                    } else if (quiz_question.type === "textarea") {
                        if (quizOrder === quiz_question.order) {
                            return <TwoTextAresForms key={i} quiz_question={quiz_question} setStudentAnswers={setStudentAnswers} studnetAnswers={studnetAnswers} quizOrder={quizOrder} setQuizOrder={setQuizOrder} />
                        }
                    }

                })}

            </div>
        </div>
    )
}

export default Quiz





