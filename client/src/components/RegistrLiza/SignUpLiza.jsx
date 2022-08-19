import React from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import {
  Col, Form, Row,
} from 'reactstrap';
import TextField from '@mui/material/TextField';
import { Button, Box } from '@mui/material';

// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

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
          <Button id="button" variant="contained">далее</Button>
        </Form>
      </Col>
    </Row>
  );
}
