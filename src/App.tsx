import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./components/context/authContext";
import Login from './pages/login/Login';
import './App.css';

function App() {

  const [userCredentials, setUserCredentials] = useState<{
    username: string | undefined,
  }>({
    username: undefined,
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

        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
