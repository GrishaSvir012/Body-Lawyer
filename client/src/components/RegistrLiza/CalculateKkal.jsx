import React, { useState } from 'react';
import { Col, Form, Row } from 'reactstrap';
import TextField from '@mui/material/TextField';
import { Button, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { userBody } from '../../Redux/actions/bodyActions';

export default function CalculateKkal() {
  const [input, setInput] = useState({ gender: '', age: '', weight: '', height: '', activity: '', point: '' });

  const changeHandler = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('gender', input.gender);
    data.append('age', input.age);
    data.append('weight', input.weight);
    data.append('height', input.height);
    data.append('activity', input.activity);
    data.append('mission', input.mission);
    dispatch(userBody(data));
    setInput({});
  };

  return (
    <Row className="formRow">
      <Col className="formCol">
        <Form onSubmit={submitHandler} className="form">
          <div className="titleForm">регистрация</div>
          <div className="titleForm">подсчет нормы калорий</div>
          <FormControl style={{ width: '500px' }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormLabel value={input.gender} id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField value={input.age} onChange={changeHandler} id="outlined-basic" label="возраст" variant="outlined" />
          <TextField value={input.weight} onChange={changeHandler} id="outlined-basic" label="вес" variant="outlined" />
          <TextField value={input.height} onChange={changeHandler} id="outlined-basic" label="рост" variant="outlined" />
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">физическая активность</InputLabel>
            <Select
              onChange={changeHandler}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={input.activity}
            >
              <MenuItem value="1.2">Минимальная</MenuItem>
              <MenuItem value="1.42">Средняя</MenuItem>
              <MenuItem value="1.6">Высокая</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Выберите цель</InputLabel>
            <Select
              value={input.point}
              onChange={changeHandler}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
            >
              <MenuItem value="slim">Похудеть</MenuItem>
              <MenuItem value="save">Сохранить вес</MenuItem>
              <MenuItem value="gain">Набрать вес</MenuItem>
            </Select>
          </FormControl>
          <Button id="button" variant="contained">зарегистрироваться</Button>
        </Form>
      </Col>
    </Row>
  );
}
