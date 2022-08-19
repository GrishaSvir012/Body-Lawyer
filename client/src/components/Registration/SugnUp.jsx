import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../Redux/actions/userAcions';

export default function SignUp() {
  const [input, setInput] = useState({});
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.name && input.email && input.password) {
      dispatch(userSignUp(input));
      setInput({});
    }
  };
  return (
    <Row>
      <Col md={{ size: 4, offset: 4 }} xs="12">
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label>Login</Label>
            <Input
              type="text"
              name="name"
              onChange={inputHandler}
              value={input.name || ''}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              onChange={inputHandler}
              value={input.email || ''}
            />
          </FormGroup>
          <FormGroup>
            <Label>Image</Label>
            <Input
              type="file"
              name="img"
              onChange={inputHandler}
              value={input.img || ''}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              onChange={inputHandler}
              value={input.password || ''}
            />
          </FormGroup>
          <Button type="submit">Ok</Button>
        </Form>
        {error && <p> Что то пошло не так</p>}
      </Col>
    </Row>
  );
}
