import React from 'react';
import { Col, Form, Row } from 'reactstrap';
import TextField from '@mui/material/TextField';
import { Button, Box } from '@mui/material';

export default function LogInLiza() {
  return (
    <Row className="formRow">
      <Col className="formCol">
        <Form className="form">
          <div className="titleForm">вход</div>
          <TextField id="outlined-basic" label="email" variant="outlined" />
          <TextField id="outlined-basic" label="пароль" variant="outlined" />
          <Button id="button" variant="contained">войти</Button>
        </Form>
      </Col>
    </Row>
  );
}
