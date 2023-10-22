import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./quiz.scss"
import Navbar from '../../components/navbar/Navbar'
import TwoTextAresForms from './components/TwoTextAresForms'
import AnswerAllt from './components/AnswerAllt'
import { lasforstaelse2 } from "./questions/questions"
import { useDispatch } from 'react-redux'
import { add_user_info } from '../../redux/UserReducer'
import { retrieveStudentAnswers } from './functions/retrieveStudentAnswers'

type Props = {
    username: string
}

const Quiz = ({ username }: Props) => {



    const [userID, setUserID] = useState("")
    const [quizOrder, setQuizOrder] = useState(0)
    const [quizTracker, setQuizTracker] = useState<string[]>(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",]);
    const [studnetAnswers, setStudentAnswers] = useState([
        { nr: 0, question: `${lasforstaelse2[0].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 1, question: `${lasforstaelse2[1].question}`, answer1: "", answer2: "" },
        { nr: 2, question: `${lasforstaelse2[2].question}`, answer1: "", answer2: "", points: 0 },

        { nr: 3, question: `${lasforstaelse2[3].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 4, question: `${lasforstaelse2[4].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 5, question: `${lasforstaelse2[5].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 6, question: `${lasforstaelse2[6].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 7, question: `${lasforstaelse2[7].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 8, question: `${lasforstaelse2[8].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 9, question: `${lasforstaelse2[9].question}`, answer1: "", answer2: "" },

        { nr: 10, question: `${lasforstaelse2[10].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 11, question: `${lasforstaelse2[11].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 12, question: `${lasforstaelse2[12].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 13, question: `${lasforstaelse2[13].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 14, question: `${lasforstaelse2[14].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 15, question: `${lasforstaelse2[15].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 16, question: `${lasforstaelse2[16].question}`, answer1: "", answer2: "" },

        { nr: 17, question: `${lasforstaelse2[17].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 18, question: `${lasforstaelse2[18].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 19, question: `${lasforstaelse2[19].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 20, question: `${lasforstaelse2[20].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 21, question: `${lasforstaelse2[21].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 22, question: `${lasforstaelse2[22].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 23, question: `${lasforstaelse2[23].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 24, question: `${lasforstaelse2[24].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 25, question: `${lasforstaelse2[25].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 26, question: `${lasforstaelse2[26].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 27, question: `${lasforstaelse2[27].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 28, question: `${lasforstaelse2[28].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 29, question: `${lasforstaelse2[29].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 30, question: `${lasforstaelse2[30].question}`, answer1: "", answer2: "", points: 0 },
        { nr: 31, question: `${lasforstaelse2[31].question}`, answer1: "", answer2: "", points: 0 },
    ])


    const dispatch = useDispatch()


    useEffect(() => {
        axios.get(`https://server-school-test.onrender.com/server/users/username/${username}`)
            // axios.get(`http://localhost:8800/server/users/username/${username}`)
            .then((response) => {
                // Handle the response data here
                console.log("response.data", response.data);
                const userData = response.data

                setUserID(userData.user._id)

                if (userData) {
                    const addToUserReducer = {
                        _id: userData.user._id,
                        username: userData.user.username,
                        lasforstaelse2: userData.user.lasforstaelse2,
                        lasforstaelse2_points: userData.user.lasforstaelse2_points
                    };

                    dispatch(add_user_info(addToUserReducer));

                    // Retrieve old results
                    if (userData.user.lasforstaelse2.length > 0) {
                        setStudentAnswers(retrieveStudentAnswers(userData.user.lasforstaelse2))
                    }


                }

            })
            .catch((error) => {
                // Handle any errors that occur during the request
                console.error(error);


            });
    }, [])








    return (
        <div className='quiz'>
            <Navbar setQuizOrder={setQuizOrder} quizTracker={quizTracker} />

            <div className="mainContent">

                {lasforstaelse2.map((quiz_question, i) => {
                    if (quiz_question.type === "answerAlt") {
                        if (quizOrder === quiz_question.order) {
                            return <AnswerAllt key={i} quiz_question={quiz_question} setStudentAnswers={setStudentAnswers} studnetAnswers={studnetAnswers} quizOrder={quizOrder} setQuizOrder={setQuizOrder} setQuizTracker={setQuizTracker} userID={userID} />
                        }

                    } else if (quiz_question.type === "textarea") {
                        if (quizOrder === quiz_question.order) {
                            return <TwoTextAresForms key={i} quiz_question={quiz_question} setStudentAnswers={setStudentAnswers} studnetAnswers={studnetAnswers} quizOrder={quizOrder} setQuizOrder={setQuizOrder} setQuizTracker={setQuizTracker} userID={userID} />
                        }
                    }

                })}

            </div>
        </div>
    )
}

export default Quiz





