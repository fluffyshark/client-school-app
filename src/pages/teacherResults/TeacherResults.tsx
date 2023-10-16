import React, { useEffect, useState } from 'react'
import "./teacherResults.scss"
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from './components/PDFfile';
import { getAllUsers } from '../../requests/requests';

type Props = {}

interface FormData {
    titleInput: string;
    nameInput: string
}


const TeacherResults = (props: Props) => {

    const [allUsers, setAllUsers] = useState<any>([])

    const [formData, setFormData] = React.useState<FormData>({
        titleInput: "Läsförståelse 2",
        nameInput: "",
    });

    const [data, setData] = useState<any>([
        { name: 'Namn:', code: 'Kod:', points: "Poäng:", taskTitle1: "Övning", taskTitle2: "Text A", taskTitle3: "Text B", taskTitle4: "Text C", task1: "1: A", task2: "2a: ...", task3: "2b: ...", task4: "3: A", task5: "1: A", task6: "2: A", task7: "3: A", task8: "4: A", task9: "5: A", task10: "6: A", task11: "7a: ...", task12: "7b: ...", task13: "1: A", task14: "2: A", task15: "3: A", task16: "4: A", task17: "5: A", task18: "6: A", task19: "7a: ...", task20: "7b: ..", task21: "1: A", task22: "2: A", task23: "3: A", task24: "4: A", task25: "5: A", task26: "6: A", task27: "7: A", task28: "8: A", task29: "9: A", task30: "10: A", task31: "11: A", task32: "12: A", task33: "13: A", task34: "14: A", task35: "15: A", text1: "Övning 2a:", text2: "Övning 2a:", text3: "Text A 7a:", text4: "Text A 7b:", text5: "Text B 7a:", text6: "Text B 7b:" },
    ])


    useEffect(() => {
        get_all_users_from_database()
    }, [])



    async function get_all_users_from_database() {
        try {
            // Make the API request to fetch all users
            const response = await getAllUsers();

            setAllUsers(response.data)

        } catch (error) {
            console.error(error);
        }
    }



    useEffect(() => {
        const convertedArray = [];
        console.log(allUsers);

        for (let index = 0; index < allUsers.length; index++) {
            const currentItem = allUsers[index];

            if (currentItem.lasforstaelse2 && currentItem.lasforstaelse2[0]) {
                const convertedData = {
                    name: "Namn:",
                    code: `Kod: ${currentItem.username}`,
                    points: "Poäng:",
                    taskTitle1: "Övning",
                    taskTitle2: "Text A",
                    taskTitle3: "Text B",
                    taskTitle4: "Text C",
                    task1: `1: ${currentItem.lasforstaelse2[0].answer1}`,
                    task2: "2a: ...",
                    task3: "2b: ...",
                    task4: `3: ${currentItem.lasforstaelse2[2].answer1}`,
                    task5: `1: ${currentItem.lasforstaelse2[3].answer1}`,
                    task6: `2: ${currentItem.lasforstaelse2[4].answer1}`,
                    task7: `3: ${currentItem.lasforstaelse2[5].answer1}`,
                    task8: `4: ${currentItem.lasforstaelse2[6].answer1}`,
                    task9: `5: ${currentItem.lasforstaelse2[7].answer1}`,
                    task10: `6: ${currentItem.lasforstaelse2[8].answer1}`,
                    task11: "7a: ...",
                    task12: "7b: ...",
                    task13: `1: ${currentItem.lasforstaelse2[10].answer1}`,
                    task14: `2: ${currentItem.lasforstaelse2[11].answer1}`,
                    task15: `3: ${currentItem.lasforstaelse2[12].answer1}`,
                    task16: `4: ${currentItem.lasforstaelse2[13].answer1}`,
                    task17: `5: ${currentItem.lasforstaelse2[14].answer1}`,
                    task18: `6: ${currentItem.lasforstaelse2[15].answer1}`,
                    task19: "7a: ...",
                    task20: "7b: ..",
                    task21: `1: ${currentItem.lasforstaelse2[17].answer1}`,
                    task22: `2: ${currentItem.lasforstaelse2[18].answer1}`,
                    task23: `3: ${currentItem.lasforstaelse2[19].answer1}`,
                    task24: `4: ${currentItem.lasforstaelse2[20].answer1}`,
                    task25: `5: ${currentItem.lasforstaelse2[21].answer1}`,
                    task26: `6: ${currentItem.lasforstaelse2[22].answer1}`,
                    task27: `7: ${currentItem.lasforstaelse2[23].answer1}`,
                    task28: `8: ${currentItem.lasforstaelse2[24].answer1}`,
                    task29: `9: ${currentItem.lasforstaelse2[25].answer1}`,
                    task30: `10: ${currentItem.lasforstaelse2[26].answer1}`,
                    task31: `11: ${currentItem.lasforstaelse2[27].answer1}`,
                    task32: `12: ${currentItem.lasforstaelse2[28].answer1}`,
                    task33: `13: ${currentItem.lasforstaelse2[29].answer1}`,
                    task34: `14: ${currentItem.lasforstaelse2[30].answer1}`,
                    task35: `15: ${currentItem.lasforstaelse2[31].answer1}`,
                    text1: `Övning 2a: ${currentItem.lasforstaelse2[1].answer1}`,
                    text2: `Övning 2b: ${currentItem.lasforstaelse2[1].answer2}`,
                    text3: `Text A 7a: ${currentItem.lasforstaelse2[9].answer1}`,
                    text4: `Text A 7b: ${currentItem.lasforstaelse2[9].answer2}`,
                    text5: `Text B 7a: ${currentItem.lasforstaelse2[16].answer1}`,
                    text6: `Text B 7b: ${currentItem.lasforstaelse2[16].answer2}`
                };

                convertedArray.push(convertedData);
            }
        }

        setData(convertedArray);
    }, [allUsers]);






    return (
        <div className='teacherResults'>
            <PDFDownloadLink document={<PDFFile formData={formData} data={data} />} fileName="Character Sheet">
                {({ loading }) => (loading ? <button>Loading document...</button> : <button className='PDFbutton'>Download results as PDF</button>)}
            </PDFDownloadLink>
        </div>
    )
}


export default TeacherResults