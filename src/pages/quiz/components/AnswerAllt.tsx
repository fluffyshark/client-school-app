import React, { useState } from 'react'
import "./answerAllt.scss"
import axios from 'axios';

import { lasforstaelse2 } from "./../questions/questions"

type Props = {
    quiz_question: any
    setStudentAnswers: any
    studnetAnswers: any
    quizOrder: number
    setQuizOrder: any
    setQuizTracker: any
}

const AnswerAllt = ({ quiz_question, setStudentAnswers, studnetAnswers, quizOrder, setQuizOrder, setQuizTracker }: Props) => {

    function clickedOnAlt(answer: string, order: number) {
        const updatedAnswers = [...studnetAnswers];
        updatedAnswers[order].answer1 = answer;
        if (lasforstaelse2[order].correct === answer) { updatedAnswers[order].points = 1; } else { updatedAnswers[order].points = 0; }
        setStudentAnswers(updatedAnswers);

        setQuizTracker((prevState: string[]) => {
            const updatedQuizTracker = [...prevState]; // Create a copy of the original array
            updatedQuizTracker[quizOrder] = "done"; // Set the element at index 2 to "done"
            return updatedQuizTracker; // Return the updated array
        });

        setQuizOrder(quizOrder + 1)



        setTimeout(() => {
            sendToDatabase(updatedAnswers)
        }, 1000);
    }


    function sendToDatabase(updatedAnswers: any) {
        axios.put(`http://localhost:8800/server/users/6522a79e3292e8cde1a79cb6/lasforstaelse2`, { studnetAnswers: updatedAnswers })
            .then((response) => {
                console.log('User updated successfully:', response.data);
                // Handle success, if needed
            })
            .catch((error) => {
                console.error('Error updating user:', error);
                // Handle errors, if needed
            });
    }



    return (
        <div className='answerAlt'>
            <div className="answerAlt_questionArea">
                <p style={{ width: `${quiz_question.questionWith}` }}>{quiz_question.question}</p>
            </div>
            <div className="answerAlt_answerArea">

                <div id="answerA" className="answerAlt" onClick={() => { clickedOnAlt(`${quiz_question.alt1}`, quizOrder) }}><p>{quiz_question.alt1}</p></div>
                <div id="answerB" className="answerAlt" onClick={() => { clickedOnAlt(`${quiz_question.alt2}`, quizOrder) }}><p>{quiz_question.alt2}</p></div>
                <div id="answerC" className="answerAlt" onClick={() => { clickedOnAlt(`${quiz_question.alt3}`, quizOrder) }}><p>{quiz_question.alt3}</p></div>
                <div id="answerD" className="answerAlt" onClick={() => { clickedOnAlt(`${quiz_question.alt4}`, quizOrder) }}><p>{quiz_question.alt4}</p></div>

            </div>
        </div >
    )
}

export default AnswerAllt