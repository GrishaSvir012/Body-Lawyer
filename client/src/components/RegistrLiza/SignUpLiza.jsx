import React from 'react';
import { Col, Form, Row } from 'reactstrap';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SignUpLiza() {
  return (
    <Row className="formRow">
      <Col className="formCol">
        <Form className="form">
          <div className="titleForm">регистрация</div>
          <TextField id="outlined-basic" label="имя" variant="outlined" />
          <TextField id="outlined-basic" label="email" variant="outlined" />
          <TextField id="outlined-basic" label="пароль" variant="outlined" />
          <TextField id="outlined-basic" label="повторите пароль" variant="outlined" />
          <div className="fileUpload">
            <Button variant="contained" component="label">
              Загрузить фото
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </div>
          <Button id="button" variant="contained"><Link to="/signup/kkal">продолжить</Link></Button>
        </Form>
      </Col>
    </Row>
  );
}
