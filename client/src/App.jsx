import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;
