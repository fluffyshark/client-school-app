export function retrieveStudentAnswers(data:any) {
    console.log("retrieveStudentAnswers")
    let retrievedAnswers = [
        { nr: 0, question: `${data[0].question}`, answer1: data[0].answer1, answer2: data[0].answer2, points: data[0].points },
        { nr: 1, question: `${data[1].question}`, answer1: data[1].answer1, answer2: data[1].answer2 },
        { nr: 2, question: `${data[2].question}`, answer1: data[2].answer1, answer2: data[2].answer2, points: data[2].points },

        { nr: 3, question: `${data[3].question}`, answer1: data[3].answer1, answer2: data[3].answer2, points: data[3].points },
        { nr: 4, question: `${data[4].question}`, answer1: data[4].answer1, answer2: data[4].answer2, points: data[4].points },
        { nr: 5, question: `${data[5].question}`, answer1: data[5].answer1, answer2: data[5].answer2, points: data[5].points },
        { nr: 6, question: `${data[6].question}`, answer1: data[6].answer1, answer2: data[6].answer2, points: data[6].points },
        { nr: 7, question: `${data[7].question}`, answer1: data[7].answer1, answer2: data[7].answer2, points: data[7].points },
        { nr: 8, question: `${data[8].question}`, answer1: data[8].answer1, answer2: data[8].answer2, points: data[8].points },
        { nr: 9, question: `${data[9].question}`, answer1: data[9].answer1, answer2: data[9].answer2 },

        { nr: 10, question: `${data[10].question}`, answer1: data[10].answer1, answer2: data[10].answer2, points: data[10].points },
        { nr: 11, question: `${data[11].question}`, answer1: data[11].answer1, answer2: data[11].answer2, points: data[11].points },
        { nr: 12, question: `${data[12].question}`, answer1: data[12].answer1, answer2: data[12].answer2, points: data[12].points },
        { nr: 13, question: `${data[13].question}`, answer1: data[13].answer1, answer2: data[13].answer2, points: data[13].points },
        { nr: 14, question: `${data[14].question}`, answer1: data[14].answer1, answer2: data[14].answer2, points: data[14].points },
        { nr: 15, question: `${data[15].question}`, answer1: data[15].answer1, answer2: data[15].answer2, points: data[15].points },
        { nr: 16, question: `${data[16].question}`, answer1: data[16].answer1, answer2: data[16].answer2 },

        { nr: 17, question: `${data[17].question}`, answer1: data[17].answer1, answer2: data[17].answer2, points: data[17].points },
        { nr: 18, question: `${data[18].question}`, answer1: data[18].answer1, answer2: data[18].answer2, points: data[18].points },
        { nr: 19, question: `${data[19].question}`, answer1: data[19].answer1, answer2: data[19].answer2, points: data[19].points },
        { nr: 20, question: `${data[20].question}`, answer1: data[20].answer1, answer2: data[20].answer2, points: data[20].points },
        { nr: 21, question: `${data[21].question}`, answer1: data[21].answer1, answer2: data[21].answer2, points: data[21].points },
        { nr: 22, question: `${data[22].question}`, answer1: data[22].answer1, answer2: data[22].answer2, points: data[22].points },
        { nr: 23, question: `${data[23].question}`, answer1: data[23].answer1, answer2: data[23].answer2, points: data[23].points },
        { nr: 24, question: `${data[24].question}`, answer1: data[24].answer1, answer2: data[24].answer2, points: data[24].points },
        { nr: 25, question: `${data[25].question}`, answer1: data[25].answer1, answer2: data[25].answer2, points: data[25].points },
        { nr: 26, question: `${data[26].question}`, answer1: data[26].answer1, answer2: data[26].answer2, points: data[26].points },
        { nr: 27, question: `${data[27].question}`, answer1: data[27].answer1, answer2: data[27].answer2, points: data[27].points },
        { nr: 28, question: `${data[28].question}`, answer1: data[28].answer1, answer2: data[28].answer2, points: data[28].points },
        { nr: 29, question: `${data[29].question}`, answer1: data[29].answer1, answer2: data[29].answer2, points: data[29].points },
        { nr: 30, question: `${data[30].question}`, answer1: data[30].answer1, answer2: data[30].answer2, points: data[30].points },
        { nr: 31, question: `${data[31].question}`, answer1: data[31].answer1, answer2: data[31].answer2, points: data[31].points },
    ]

    

    return retrievedAnswers
}