import React, { useState, useEffect } from 'react'
import "./answerAllt.scss"
import axios from 'axios';

import { lasforstaelse2 } from "./../questions/questions"
import { useSelector } from 'react-redux';

type Props = {
    quiz_question: any
    setStudentAnswers: any
    studnetAnswers: any
    quizOrder: number
    setQuizOrder: any
    setQuizTracker: any
    userID: string
}


const AnswerAllt = ({ quiz_question, setStudentAnswers, studnetAnswers, quizOrder, setQuizOrder, setQuizTracker, userID }: Props) => {


    const user = useSelector((state: any) => state.user.value);


    useEffect(() => {
        console.log("user", user)
    }, [user])



    function clickedOnAlt(answer: string, order: number) {
        const updatedAnswers = [...studnetAnswers];
        updatedAnswers[order].answer1 = answer.charAt(0);
        if (lasforstaelse2[order].correct === answer) {
            updatedAnswers[order].points = 1;
            sendPointsToDatabase()
        } else { updatedAnswers[order].points = 0; }
        setStudentAnswers(updatedAnswers);

        setQuizTracker((prevState: string[]) => {
            const updatedQuizTracker = [...prevState]; // Create a copy of the original array
            updatedQuizTracker[quizOrder] = "done"; // Set the element at index 2 to "done"
            return updatedQuizTracker; // Return the updated array
        });

        setQuizOrder(quizOrder + 1)

        setTimeout(() => {
            sendToDatabase(updatedAnswers)
        }, 500);
    }




    console.log("THIS userID", userID)

    function sendToDatabase(updatedAnswers: any) {
        // axios.put(`https://server-school-test.onrender.com/server/users/${userID}/lasforstaelse2`, { studnetAnswers: updatedAnswers })
        axios.put(`http://localhost:8800/server/users/${userID}/lasforstaelse2`, { studnetAnswers: updatedAnswers })
            .then((response) => {
                console.log('User updated successfully:', response.data);
                // Handle success, if needed
            })
            .catch((error) => {
                console.error('Error updating user:', error);
                // Handle errors, if needed
            });
    }




    function sendPointsToDatabase() {
        // axios.post(`https://server-school-test.onrender.com/server/users/${userID}/lasforstaelse2_points`, { points: 1 })
        axios.put(`http://localhost:8800/server/users/${userID}/lasforstaelse2_points`, { points: 1 })
            .then(response => {
                console.log('Point added successfully:', response.data);
            })
            .catch(error => {
                console.error('Error adding point:', error);
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