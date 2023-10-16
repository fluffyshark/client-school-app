import React, { useState } from 'react';
import "./twoTextAresForm.scss"
import axios from 'axios';

interface FormState {
    field1: string;
    field2: string;
}

interface Props {
    quiz_question: any
    setStudentAnswers: any
    studnetAnswers: any
    quizOrder: number
    setQuizOrder: any
    setQuizTracker: any
    userID: string
}

const TwoTextAresForms = ({ quiz_question, setStudentAnswers, studnetAnswers, quizOrder, setQuizOrder, setQuizTracker, userID }: Props) => {

    const [formData, setFormData] = useState<FormState>({
        field1: '',
        field2: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        // Limit the text to 100 characters
        const truncatedValue = value.slice(0, 100);

        setFormData({
            ...formData,
            [name]: truncatedValue,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // You can handle form submission here, e.g., send data to an API
        console.log('Form Data:', formData);
        const updatedAnswers = [...studnetAnswers];
        updatedAnswers[quizOrder].answer1 = formData.field1;
        updatedAnswers[quizOrder].answer2 = formData.field2;
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
    };



    function sendToDatabase(updatedAnswers: any) {
        axios.put(`https://server-school-test.onrender.com/server/users/${userID}/lasforstaelse2`, { studnetAnswers: updatedAnswers })
            // axios.put(`http://localhost:8800/server/users/${userID}/lasforstaelse2`, { studnetAnswers: updatedAnswers })
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

        <div className='textAreaForm'>
            <div className="textArea_questionArea">
                <p style={{ width: `${quiz_question.questionWith}` }}>{quiz_question.question}</p>

            </div>
            <div className="textArea_answerArea">

                <form onSubmit={handleSubmit}>
                    <div>

                        <textarea
                            id="field1"
                            name="field1"
                            value={formData.field1}
                            onChange={handleChange}
                            rows={1} // You can adjust the number of rows as needed
                            placeholder="A) Skriv här ..."
                        />
                    </div>
                    <div>

                        <textarea
                            id="field2"
                            name="field2"
                            value={formData.field2}
                            onChange={handleChange}
                            rows={1}
                            placeholder="B) Skriv här ..."
                        />
                    </div>
                    <button type="submit">Klar</button>
                </form>
            </div>

        </div >
    )
}

export default TwoTextAresForms