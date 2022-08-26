import React, { useState } from 'react';
import { Col, Form, Row } from 'reactstrap';
import TextField from '@mui/material/TextField';
import {
  Button, Box, FormControl, FormLabel,
  RadioGroup, FormControlLabel,
  Radio, InputLabel, Select, MenuItem,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userBodyAdd } from '../../Redux/actions/bodyActions';

export default function CalculateKkal() {
  const [input, setInput] = useState({
    gender: null,
    age: null,
    weigth: null,
    height: null,
    activity: null,
    mission: null,
  });
  const navigate = useNavigate();

  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    console.log(input);
    e.preventDefault();
    dispatch(userBodyAdd(input));
    setInput({});
    navigate('/personalaccount');
  };

  return (
    <Row className="formRow">
      <Col className="formCol">
        <Form onSubmit={submitHandler} className="form">
          <div className="titleForm">регистрация</div>
          <div className="titleForm" id="mini">подсчет нормы калорий</div>
          <FormControl
            style={{ width: '500px' }}
          >
            <RadioGroup
              onChange={changeHandler}
              value={input.gender || null}
              name="gender"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormLabel id="demo-row-radio-buttons-group-label">
                пол:
              </FormLabel>
              <FormControlLabel value="female" control={<Radio />} label="женский" />
              <FormControlLabel value="male" control={<Radio />} label="мужской" />
            </RadioGroup>
          </FormControl>
          <TextField
            className="inputReg"
            name="age"
            value={input.age || ''}
            onChange={changeHandler}
            id="outlined-basic"
            label="возраст"
            variant="outlined"
          />
          <TextField
            className="inputReg"
            name="weigth"
            value={input.weigth || ''}
            onChange={changeHandler}
            id="outlined-basic"
            label="вес"
            variant="outlined"
          />
          <TextField
            className="inputReg"
            name="height"
            value={input.height || ''}
            onChange={changeHandler}
            id="outlined-basic"
            label="рост"
            variant="outlined"
          />
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">физическая активность</InputLabel>
            <Select
              className="inputReg"
              name="activity"
              value={input.activity || ''}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              onChange={changeHandler}
            >
              <MenuItem value="1.2">Минимальная</MenuItem>
              <MenuItem value="1.42">Средняя</MenuItem>
              <MenuItem value="1.6">Высокая</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Выберите цель</InputLabel>
            <Select
              className="inputReg"
              name="mission"
              value={input.mission || ''}
              onChange={changeHandler}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
            >
              <MenuItem value="slim">Похудеть</MenuItem>
              <MenuItem value="save">Сохранить вес</MenuItem>
              <MenuItem value="gain">Набрать вес</MenuItem>
            </Select>
          </FormControl>
          <Button
            disabled={!((
              input.gender !== null
              && input.age !== null
              && input.weigth !== null
              && input.height !== null && input.activity !== null && input.mission !== null))}
            type="submit"
            id="button"
            variant="contained"
            className="buttonSignUp"
          >
            зарегистрироваться
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
