import React, { useState } from 'react'
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
// import backgroundImage from "../../../components/assets/misc/characterCreation.png"


const styles = StyleSheet.create({

    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },

    title: { fontSize: 14, textAlign: "justify", fontFamily: "Times-Roman", position: "absolute", left: 30, top: 35, },

    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },

})


type PDFfileProps = {
    formData: any;
    data: any
}


const styles1 = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        height: 300,
    },
    item: {
        marginBottom: 40,
        fontSize: 10,
        height: 100,
        top: 50
    },
    mainText: {
        position: "absolute",
        fontSize: 10,
        nr1: { left: 0, top: 0, fontSize: 8 },
        nr2: { left: 0, top: 12, fontSize: 8 },
        nr3: { left: 0, top: 24, fontSize: 8 }
    },
    taskTitle1: {
        position: "absolute",
        fontSize: 8,
        top: 1,
        left: 85,
    },
    taskTitle2: {
        position: "absolute",
        fontSize: 8,
        top: 1,
        left: 130,
    },
    taskTitle3: {
        position: "absolute",
        fontSize: 8,
        top: 1,
        left: 190,
    },
    taskTitle4: {
        position: "absolute",
        fontSize: 8,
        top: 1,
        left: 250,
    },
    taskgroup1: {
        position: "absolute",
        nr1: { left: 86, top: 4, fontSize: 8 },
        nr2: { left: 86, top: 12, fontSize: 8 },
        nr3: { left: 86, top: 20, fontSize: 8 },
        nr4: { left: 86, top: 28, fontSize: 8 },
    },
    taskgroup2: {
        position: "absolute",
        nr1: { left: 130, top: -5, fontSize: 8 },
        nr2: { left: 130, top: 3, fontSize: 8 },
        nr3: { left: 130, top: 11, fontSize: 8 },
        nr4: { left: 130, top: 19, fontSize: 8 },
    },
    taskgroup3: {
        position: "absolute",
        nr1: { left: 155, top: -14.5, fontSize: 8 },
        nr2: { left: 155, top: -6.5, fontSize: 8 },
        nr3: { left: 155, top: 2, fontSize: 8 },
        nr4: { left: 155, top: 10, fontSize: 8 },
    },
    taskgroup4: {
        position: "absolute",
        nr1: { left: 190, top: -22.5, fontSize: 8 },
        nr2: { left: 190, top: -14, fontSize: 8 },
        nr3: { left: 190, top: -6.5, fontSize: 8 },
        nr4: { left: 190, top: 1, fontSize: 8 },
    },
    taskgroup5: {
        position: "absolute",
        nr1: { left: 215, top: -31.5, fontSize: 8 },
        nr2: { left: 215, top: -23, fontSize: 8 },
        nr3: { left: 215, top: -15.5, fontSize: 8 },
        nr4: { left: 215, top: -8, fontSize: 8 },
    },
    taskgroup6: {
        position: "absolute",
        nr1: { left: 250, top: -40.5, fontSize: 8 },
        nr2: { left: 250, top: -32, fontSize: 8 },
        nr3: { left: 250, top: -24.5, fontSize: 8 },
        nr4: { left: 250, top: -17, fontSize: 8 },
    },
    taskgroup7: {
        position: "absolute",
        nr1: { left: 275, top: -49.5, fontSize: 8 },
        nr2: { left: 275, top: -41.5, fontSize: 8 },
        nr3: { left: 275, top: -33.5, fontSize: 8 },
        nr4: { left: 275, top: -25.5, fontSize: 8 },
    },
    taskgroup8: {
        position: "absolute",
        nr1: { left: 300, top: -58.5, fontSize: 8 },
        nr2: { left: 300, top: -50.5, fontSize: 8 },
        nr3: { left: 300, top: -42.5, fontSize: 8 },
        nr4: { left: 300, top: -34.5, fontSize: 8 },
    },
    taskgroup9: {
        position: "absolute",
        nr1: { left: 325, top: -67.5, fontSize: 8 },
        nr2: { left: 325, top: -59.5, fontSize: 8 },
        nr3: { left: 325, top: -51.5, fontSize: 8 },
        nr4: { left: 325, top: -43.5, fontSize: 8 },
    },
    taskgroup10: {
        position: "absolute",
        nr1: { left: 86, top: -28, fontSize: 8, width: 300 },
        nr2: { left: 86, top: -20, fontSize: 8 },
        nr3: { left: 86, top: -12, fontSize: 8 },
        nr4: { left: 86, top: -4, fontSize: 8 },
        nr5: { left: 86, top: 4, fontSize: 8 },
        nr6: { left: 86, top: 12, fontSize: 8 },
    },
    line: {
        position: 'absolute',
        top: 120, // Adjust the top position to place the line inside the View
        left: 0, // Set the left to 0 to stretch it across the page
        width: '100%', // Set the width to 100% to make it stretch the entire page width
        height: 3, // Adjust the height of the line
        backgroundColor: 'black', // Set the color of the line
    },
    line2: {
        position: 'absolute',
        top: 54, // Adjust the top position to place the line inside the View
        left: 0, // Set the left to 0 to stretch it across the page
        width: '100%', // Set the width to 100% to make it stretch the entire page width
        height: 1, // Adjust the height of the line
        backgroundColor: 'black', // Set the color of the line
    }
});

const PDFfile = ({ formData, data }: PDFfileProps) => {



    return (
        <Document>
            <Page style={styles.body}>
                {/* <Image style={styles.image} src={backgroundImage} /> */}

                <Text style={styles.title}>
                    {formData.titleInput}
                </Text>


                {data.map((item: any, index: number) => (
                    <View key={index} style={[styles1.item, { width: '100%' }]}>
                        <Text style={styles1.mainText.nr1}>{item.name}</Text>
                        <Text style={styles1.mainText.nr2}>{item.code}</Text>
                        <Text style={styles1.mainText.nr3}>{item.points}</Text>

                        <Text style={styles1.taskTitle1}>{item.taskTitle1}</Text>
                        <Text style={styles1.taskTitle2}>{item.taskTitle2}</Text>
                        <Text style={styles1.taskTitle3}>{item.taskTitle3}</Text>
                        <Text style={styles1.taskTitle4}>{item.taskTitle4}</Text>

                        <Text style={styles1.taskgroup1.nr1}>{item.task1}</Text>
                        <Text style={styles1.taskgroup1.nr2}>{item.task2}</Text>
                        <Text style={styles1.taskgroup1.nr3}>{item.task3}</Text>
                        <Text style={styles1.taskgroup1.nr4}>{item.task4}</Text>

                        <Text style={styles1.taskgroup2.nr1}>{item.task5}</Text>
                        <Text style={styles1.taskgroup2.nr2}>{item.task6}</Text>
                        <Text style={styles1.taskgroup2.nr3}>{item.task7}</Text>
                        <Text style={styles1.taskgroup2.nr4}>{item.task8}</Text>

                        <Text style={styles1.taskgroup3.nr1}>{item.task9}</Text>
                        <Text style={styles1.taskgroup3.nr2}>{item.task10}</Text>
                        <Text style={styles1.taskgroup3.nr3}>{item.task11}</Text>
                        <Text style={styles1.taskgroup3.nr4}>{item.task12}</Text>

                        <Text style={styles1.taskgroup4.nr1}>{item.task13}</Text>
                        <Text style={styles1.taskgroup4.nr2}>{item.task14}</Text>
                        <Text style={styles1.taskgroup4.nr3}>{item.task15}</Text>
                        <Text style={styles1.taskgroup4.nr4}>{item.task16}</Text>

                        <Text style={styles1.taskgroup5.nr1}>{item.task17}</Text>
                        <Text style={styles1.taskgroup5.nr2}>{item.task18}</Text>
                        <Text style={styles1.taskgroup5.nr3}>{item.task19}</Text>
                        <Text style={styles1.taskgroup5.nr4}>{item.task20}</Text>

                        <Text style={styles1.taskgroup6.nr1}>{item.task21}</Text>
                        <Text style={styles1.taskgroup6.nr2}>{item.task22}</Text>
                        <Text style={styles1.taskgroup6.nr3}>{item.task23}</Text>
                        <Text style={styles1.taskgroup6.nr4}>{item.task24}</Text>

                        <Text style={styles1.taskgroup7.nr1}>{item.task25}</Text>
                        <Text style={styles1.taskgroup7.nr2}>{item.task26}</Text>
                        <Text style={styles1.taskgroup7.nr3}>{item.task27}</Text>
                        <Text style={styles1.taskgroup7.nr4}>{item.task28}</Text>

                        <Text style={styles1.taskgroup8.nr1}>{item.task29}</Text>
                        <Text style={styles1.taskgroup8.nr2}>{item.task30}</Text>
                        <Text style={styles1.taskgroup8.nr3}>{item.task31}</Text>
                        <Text style={styles1.taskgroup8.nr4}>{item.task32}</Text>

                        <Text style={styles1.taskgroup9.nr1}>{item.task33}</Text>
                        <Text style={styles1.taskgroup9.nr2}>{item.task34}</Text>
                        <Text style={styles1.taskgroup9.nr3}>{item.task35}</Text>

                        <Text style={[styles1.taskgroup10.nr1, { width: "100%" }]}>{item.text1}</Text>
                        <Text style={styles1.taskgroup10.nr2}>{item.text2}</Text>
                        <Text style={styles1.taskgroup10.nr3}>{item.text3}</Text>
                        <Text style={styles1.taskgroup10.nr4}>{item.text4}</Text>
                        <Text style={styles1.taskgroup10.nr5}>{item.text5}</Text>
                        <Text style={styles1.taskgroup10.nr6}>{item.text6}</Text>

                        <View style={styles1.line} />
                        <View style={styles1.line2} />
                    </View>
                ))}

                <Text
                    render={({ pageNumber, totalPages }) => ``}
                    fixed
                />
            </Page>
        </Document >
    )
}

export default PDFfile