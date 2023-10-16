import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./components/context/authContext";
import Login from './pages/login/Login';
import './App.css';
import Quiz from './pages/quiz/Quiz';
import TeacherResults from './pages/teacherResults/TeacherResults';
import CreateNewClass from './pages/createNewClass/CreateNewClass';

function App() {

  const [userCredentials, setUserCredentials] = useState<{
    username: string,
  }>({
    username: '',
  })

  const getUserCredentials = (credentials: {
    username: string,
  }) => {
    setUserCredentials(credentials)
  }


  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login getUserCredentials={getUserCredentials} />} />
          <Route path="/login/:paramusername" element={<Login getUserCredentials={getUserCredentials} />} />
          <Route path="/quiz" element={<Quiz username={userCredentials.username} />} />
          <Route path="/teacherresults" element={<TeacherResults />} />
          <Route path="/createNewClass" element={<CreateNewClass />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
