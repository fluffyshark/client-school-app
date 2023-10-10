import React, { useState } from 'react'
import "./navbar.scss"
import { lasforstaelse2 } from "../../pages/quiz/questions/questions"

type Props = {
    setQuizOrder: any
    quizTracker: string[]
}

const Navbar = ({ setQuizOrder, quizTracker }: Props) => {

    return (
        <div className='navbar'>

            <div className="left">
                {lasforstaelse2.map((question, i) => {
                    return <div key={i} className="progressCicle" onClick={() => setQuizOrder(i)}>
                        {quizTracker[i] !== "" && <div className="progressCicleDot"></div>}
                    </div>
                })}

            </div>

            <div className="right"></div>
        </div>
    )
}

export default Navbar