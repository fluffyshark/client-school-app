import React, { useState } from 'react';
import "./twoTextAresForm.scss"

interface FormState {
    field1: string;
    field2: string;
}

interface Props {
    quiz_question: any
}

const TwoTextAresForms = ({ quiz_question }: Props) => {

    const [formData, setFormData] = useState<FormState>({
        field1: '',
        field2: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // You can handle form submission here, e.g., send data to an API
        console.log('Form Data:', formData);
    };

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
                            rows={4} // You can adjust the number of rows as needed
                            placeholder="A) Skriv här ..."
                        />
                    </div>
                    <div>

                        <textarea
                            id="field2"
                            name="field2"
                            value={formData.field2}
                            onChange={handleChange}
                            rows={4}
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