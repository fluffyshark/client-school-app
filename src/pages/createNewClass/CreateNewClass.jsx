import React, { useState } from "react";
import axios from "axios";
import "./createNewClass.scss";

const CreateNewClass = () => {
    const [usernames, setUsernames] = useState([]); // Stores the usernames
    const [classId, setClassId] = useState(0); // Stores the classId
    const [numUsers, setNumUsers] = useState(0); // Stores the number of users from the input field
    const [latestNumUsers, setLatestNumUsers] = useState(0); // Stores numUsers of the latest class
    const [isClassCreated, setIsClassCreated] = useState(false); // Tracks class creation

    const handleCreate = async () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const generatedUsernames = []; // Stores the generated usernames
        const existingUsernames = new Set(usernames.map(obj => JSON.stringify(obj))); // Stores the ALL generated usernames (prev + curr)
        const uniqueEmails = []; // Array to store unique email values. TODO: Remove 
        const uniquePasswords = []; // Array to store unique password values. TODO: Remove 


        while (generatedUsernames.length < numUsers) {
            let username = "";
            for (let i = 0; i < 9; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length); // Generates a random index for character selection
                username += characters[randomIndex]; // Appends a random character to the username
            }

            const email = `${username}@example.com`; // Generate email based on the username. TODO: Remove
            const password = generateUniquePassword(); // Generate a unique password. TODO: Remove

            const usernameObj = { username, classId, email, password }; // Creates an object with the username and current classId. TODO: Remove 
            const usernameStr = JSON.stringify(usernameObj); // Converts the object to a JSON string representation

            if (!existingUsernames.has(usernameStr) && !uniqueEmails.includes(email)) { // Checks if the username is not already present in the set. TODO: Remove
                generatedUsernames.push(usernameObj); // Adds the username object to the generated usernames array
                existingUsernames.add(usernameStr); // Adds the username string to the Set to keep track of it
                uniqueEmails.push(email); // TODO: Remove 
                uniquePasswords.push(password); // TODO: Remove 
            }
        }

        console.log("ARRAY ->", generatedUsernames); // Logs the generated username-object
        console.log("SET ->", existingUsernames); // Logs all existing username-objects

        setClassId(classId + 1); // Increments the classId for the next set of classIds
        setUsernames([...usernames, ...generatedUsernames]); // Updates the state by concatenating the existing usernames with the generated usernames
        setLatestNumUsers(numUsers); // Store numUsers of the latest class
        setIsClassCreated(true); // Set the flag to indicate successful class creation

        // Register users in database
        try {
            const registerPromises = generatedUsernames.map((user) =>
                axios.post("http://localhost:8800/server/auth/register", {
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    class_id: user.classId,
                })
            );
            await Promise.all(registerPromises);
            console.log("Users have been created and saved in the database.");
        } catch (error) {
            console.error("Error creating users:", error);
        }
    };

    const handleNumUsersChange = (e) => {
        setNumUsers(Number(e.target.value)); // Convert the input value to a number and update the state
    };

    const generateUniquePassword = () => {
        // Generate a random password
        const password = Math.random().toString(36).slice(-8);
        // Check if the password is already used
        if (usernames.some((user) => user.password === password)) {
            // If the password is not unique, recursively call the function to generate a new one
            return generateUniquePassword();
        }
        return password;
    };

    return (
        <div className="createNewClass">
            <h1>Create New Class</h1>
            <input type="number" onChange={handleNumUsersChange} />
            <button onClick={handleCreate}>Create!</button>
            {isClassCreated && (
                <div className="classCreated">
                    <p>Class Created Successfully!</p> class_id: <p className="number">{classId - 1}</p> Number of students in class: <p className="number">{latestNumUsers}</p>
                </div>
            )}
            <div className="codeContainer">
                {usernames.map((usernameObj, index) => (
                    <p key={index}>
                        username: {usernameObj.username}, class-id: {usernameObj.classId}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default CreateNewClass;
