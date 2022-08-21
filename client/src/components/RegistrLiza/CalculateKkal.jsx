import React from 'react';
import { Col, Form, Row } from 'reactstrap';
import TextField from '@mui/material/TextField';
import { Button, Box } from '@mui/material';

export default function CalculateKkal() {
  return (
    <Row className="formRow">
      <Col className="formCol">
        <Form className="form">
          <div className="titleForm">регистрация</div>
          <div className="titleForm">подсчет нормы калорий</div>
          <TextField id="outlined-basic" label="пол" variant="outlined" />
          <TextField id="outlined-basic" label="возраст" variant="outlined" />
          <TextField id="outlined-basic" label="вес" variant="outlined" />
          <TextField id="outlined-basic" label="рост" variant="outlined" />
          <TextField id="outlined-basic" label="физическая активность" variant="outlined" />
          <TextField id="outlined-basic" label="цель" variant="outlined" />
          <Button id="button" variant="contained">зарегистрироваться</Button>
        </Form>
      </Col>
    </Row>
  );
}
