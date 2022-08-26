import React, { useState } from 'react';
import {
  Col, Form, FormGroup, Input, Label, Row
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../../Redux/actions/userActions';

export default function SignUp() {
  const [input, setInput] = useState({
    name: '', email: '', password: '', avatar: null
  });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputHandlerImg = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(input);
    const data = new FormData();
    data.append('name', input.name);
    data.append('email', input.email);
    data.append('avatar', input.avatar);
    data.append('password', input.password);
    dispatch(userSignUp(data));
    navigate('/user/body');
    setInput({});
  };

  return (
    <Row className="formRow">
      <Col className="formCol">
        <Form onSubmit={submitHandler} className="form">
          <div className="titleForm">регистрация</div>
          <TextField
            className="inputReg"
            type="text"
            name="name"
            onChange={inputHandler}
            value={input.name || ''}
            id="outlined-basic"
            label="имя"
            variant="outlined"
          />
          <TextField
            className="inputReg"
            type="email"
            name="email"
            onChange={inputHandler}
            value={input.email || ''}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <TextField
            className="inputReg"
            type="password"
            name="password"
            onChange={inputHandler}
            value={input.password || ''}
            id="outlined-basic"
            label="пароль"
            variant="outlined"
          />
          <div className="fileUpload">
            <Button className="buttonFileUpload" variant="contained" component="label">
              Загрузить фото
              <input
                name="avatar"
                onChange={inputHandlerImg}
                className="form-control"
                id="outlined-basic"
                variant="outlined"
                multiple
                type="file"
              />
            </Button>
          </div>
          <Button
            disabled={!((input.name !== '' && input.email !== '' && input.password !== ''))}
            type="submit"
            id="button"
            variant="contained"
          >

            далее

          </Button>
        </Form>
        {error && <p> Что то пошло не так</p>}
      </Col>
    </Row>
  );
}
