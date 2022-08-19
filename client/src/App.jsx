import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import SignUpLiza from './components/RegistrLiza/SignUpLiza';
import LogInLiza from './components/RegistrLiza/LogInLiza';

function App() {
  return (
    <Grid classes={{ root: { width: '100%' } }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpLiza />} />
        <Route path="/login" element={<LogInLiza />} />
      </Routes>
    </Grid>
  );
}

export default App;
