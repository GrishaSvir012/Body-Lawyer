import React, { useState } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { userSignUp } from '../../Redux/actions/userAcions';

export default function SignUp() {
  const [input, setInput] = useState({ name: '', email: '', password: '', avatar: null });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputHandlerImg = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
    const data = new FormData();
    data.append('name', input.name);
    data.append('email', input.email);
    data.append('avatar', input.avatar);
    data.append('password', input.password);
    dispatch(userSignUp(data));
    setInput({});
  };

  // Форма без мультера
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(input);
  //   if (input.name && input.email && input.password) {
  //     dispatch(userSignUp(input));
  //     setInput({});
  //   }
  // };
  return (
    <Row className="formRow">
      <Col className="formCol">
        <Form onSubmit={submitHandler} className="form">
          <div className="titleForm">регистрация</div>
          <TextField
            type="text"
            name="name"
            onChange={inputHandler}
            value={input.name || ''}
            id="outlined-basic"
            label="имя"
            variant="outlined"
          />
          <TextField
            type="email"
            name="email"
            onChange={inputHandler}
            value={input.email || ''}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <TextField
            type="password"
            name="password"
            onChange={inputHandler}
            value={input.password || ''}
            id="outlined-basic"
            label="пароль"
            variant="outlined"
          />
          <div className="fileUpload">
            <Button variant="contained" component="label">
              Загрузить фото
              <input
                name="avatar"
                onChange={inputHandlerImg}
                className="form-control"
                id="outlined-basic"
                variant="outlined"
                // hidden
                // accept="image/*"
                multiple
                type="file"
              />
            </Button>
          </div>
          <Button type="submit" id="button" variant="contained">далее</Button>
        </Form>
        {error && <p> Что то пошло не так</p>}
      </Col>
    </Row>
  );
}
//       {/* <TextField
//       name="avatar"
//       onChange={changeHandler2}
//       type="file"
//       className="form-control"
//       id="outlined-basic"
//       label="приложите ваше фото"
//       variant="outlined" /> */}
//       {/* <FormGroup>
//         <Label>Login</Label>
//         <Input
//           type="text"
//           name="name"
//           onChange={inputHandler}
//           value={input.name || ''}
//         /> */}
//       {/* </FormGroup>
//       <FormGroup>
//         <Label>Email</Label>
//         <Input
//           type="email"
//           name="email"
//           onChange={inputHandler}
//           value={input.email || ''}
//         />
//       </FormGroup> */}
//       {/* <FormGroup>
//         <Label>Image</Label>
//         <Input
//           type="file"
//           name="img"
//           onChange={inputHandler}
//           value={input.img || ''}
//         />
//       </FormGroup> */}
// //       <FormGroup>
// //         <Label>Password</Label>
// //         <Input
// //           type="password"
// //           name="password"
// //           onChange={inputHandler}
// //           value={input.password || ''}
// //         />
// //       </FormGroup>
// //       <Button type="submit">Ok</Button>
// //     </Form>
// //     {error && <p> Что то пошло не так</p>}
// //   </Col>
// // </Row>
