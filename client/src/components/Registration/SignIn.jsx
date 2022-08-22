import React, { useState } from 'react';
import { Col, Form, Row } from 'reactstrap';
import TextField from '@mui/material/TextField';
import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../Redux/actions/userAcions';

export default function SignIn() {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signInUser(input));
  };

  return (
    <Row className="formRow">
      <Col className="formCol">
        <Form onSubmit={submitHandler} className="form">
          <div className="titleForm">вход</div>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="text"
            name="email"
            onChange={inputHandler}
            value={input.email || ''}
          />
          <TextField
            id="outlined-basic"
            label="пароль"
            variant="outlined"
            type="password"
            name="password"
            onChange={inputHandler}
            value={input.password || ''}
          />
          <Button
            type="submit"
            id="button"
            variant="contained"
            disabled={!((input.email && input.password))}
          >
            войти
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
