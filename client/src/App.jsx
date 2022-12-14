import React, { Component, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Container } from 'reactstrap';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import AuthProtect from './components/RoutesProtect/AuthProtect';
import { socketInit } from './Redux/actions/wsActions';
import { userCheck } from './Redux/actions/userAcions';
import './App.css';
import CalculateKkal from './components/RegistrLiza/CalculateKkal';
import SignIn from './components/Registration/SignIn';
import SignUp from './components/Registration/SignUp';
import PersonalAccount from './components/Personal Account/PersonalAccount';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // инициализация ws
    if (user.id) {
      dispatch(socketInit());
    }
  }, [user]);

  useEffect(() => {
    dispatch(userCheck());
  }, []);

  return (
    <Container fluid>
      <Routes>
        <Route
          path="/signin"
          element={(
            <AuthProtect>
              <SignIn />
            </AuthProtect>
        )}
        />
        <Route
          path="/signup"
          element={(
            <AuthProtect>
              <SignUp />
            </AuthProtect>
      )}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup/kkal" element={<CalculateKkal />} />
        <Route path="/personalaccount" element={<PersonalAccount />} />

      </Routes>
    </Container>
  );
}

export default App;
