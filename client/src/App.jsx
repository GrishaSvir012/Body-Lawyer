import React, { Component, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import SignUp from './components/Registration/SugnUp';
import SignIn from './components/Registration/SignIn';
import AuthProtect from './components/RoutesProtect/AuthProtect';
import { socketInit } from './Redux/actions/wsActions';
import { userCheck } from './Redux/actions/userAcions';

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
    <Container>
      <NavBar />
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
      </Routes>
    </Container>
  );
}

export default App;
