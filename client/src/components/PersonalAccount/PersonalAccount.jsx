import React, { useEffect, useRef, useState } from 'react';
import {
  Row, Col, Breadcrumb, BreadcrumbItem, Form, Input
} from 'reactstrap';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import ScrollInput from '../ScrollInput/ScrollInput';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import FormProducts from '../FormProducts/FormProducts';
import { allProductGetAction } from '../../Redux/actions/allProductAction';

export default function PersonalAccount() {
  const person = useSelector((state) => state.body);
  const user = useSelector((state) => state.user);
  const allProduct = useSelector((state) => state.products);
  const [input, setInput] = useState('');
  const [type, setType] = useState(null);
  const [product, setProduct] = useState({});
  // const [myAllProducts, setMyAllProducts] = useState({});
  const [calendar, setCalendar] = useState('');
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  const dispatch = useDispatch();

  const handleSelect = (date) => {
    setCalendar(format(date, 'yyyy/MM/dd'));
  };
  const hideOnClickOutSide = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    setCalendar(format(new Date(), 'yyyy/MM/dd'));
    document.addEventListener('click', hideOnClickOutSide, true);
    return () => { document.removeEventListener('click', hideOnClickOutSide); };
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/insertyourfood', {
      ...allProduct[0], ...input, type_of_meal_id: type, date: calendar
    })
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(allProductGetAction(type, calendar));
  }, [type, calendar, product]);

  console.log(product, 'product in PersAcc');
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const statHandler = () => {
    navigate('/personalaccount/statistics');
  };

  // логика нажатой кнопки
  // console.log(type, 'это тайп');
  // const [active1, setActive1] = useState({ color: 'white' });
  // const [active2, setActive2] = useState(false);
  // const [active3, setActive3] = useState({ color: 'white' });
  // const [active4, setActive4] = useState({ color: 'white' });
  // const [disable, setDisable] = useState(true);
  return (

    <Row className="personalAccountRow">
      <div className="personalAccount">
        <Col
          className="userInfo"
          xs="2"
        >
          <Row
            className="avatar"
          >
            <div
              className="img"
              style={{ background: `url('http://localhost:3001${user.img}') no-repeat 50% 50%` }}
            />
            {/* <img src={`http://localhost:3001${user.img}`} alt="img" /> */}
            {/* <img src="https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg" alt="img" /> */}
          </Row>
          <Row className="userInfoList">
            <div>
              <ul>
                <li>
                  имя:
                  {' '}
                  {user.name}
                </li>
                {user.body
                && (
                  <>
                    <li>
                      вес:
                      {' '}
                      {user.body.weigth}
                      {' '}
                      кг
                    </li>
                    <li>
                      рост:
                      {' '}
                      {user.body.height}
                      {' '}
                      см
                    </li>
                    <li>
                      цель:
                      {' '}
                      {user.body.mission === 'gain'
                      && 'Набрать вес'}
                      {user.body.mission === 'save'
                      && 'Сохранить вес'}
                      {user.body.mission === 'slim'
                      && 'Похудеть'}
                    </li>
                    <li>
                      Норма ККАЛ:
                      {' '}
                      {person[0]}
                    </li>
                  </>
                )}
              </ul>
            </div>
          </Row>
          <Row className="buttonsUser">

            <Button className="stat" id="button" variant="contained" onClick={statHandler}>статистика</Button>
            <Button className="exit" id="button" variant="contained">выход</Button>

          </Row>
        </Col>
        <Col
          className="diary"
          xs="8"
        >
          <Row className="diaryRow">
            <Row className="titleAndInput">
              <Col className="titleDiary">
                дневник питания
              </Col>
              {/* <Box sx={{ width: '100%' }}> */}
              <Col className="inputCol">
                {/* <Box sx={{
                    width: '%' }}
                  > */}
                <>
                  <Input
                    value={calendar}
                    readOnly
                    className="inputBox"
                    // eslint-disable-next-line no-shadow
                    onClick={() => setOpen((open) => !open)}
                  />
                  <div className="openCalendar" ref={refOne}>
                    {open
                          && (
                            <Calendar
                              date={new Date()}
                              onChange={handleSelect}
                              className="calendarElement"
                            />
                          )}
                  </div>
                </>
              </Col>
            </Row>
            <Row className="buttonMeals">
              <div>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Button type="button" onClick={() => setType(1)}>
                      Завтрак
                    </Button>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Button type="button" onClick={() => setType(2)}>
                      Обед
                    </Button>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Button type="button" onClick={() => setType(3)}>
                      Ужин
                    </Button>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Button type="button" onClick={() => setType(4)}>
                      Перекус
                    </Button>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Row>
            <Row className="inputProducts">
              <Form className="formProducts" onSubmit={submitHandler}>
                <ScrollInput />
                <Input
                  className="inputGramm"
                  name="gr"
                  value={input.gr}
                  onChange={changeHandler}
                  placeholder="введите количество граммов"
                  type="text"
                />
                <Button
                  id="button"
                  type="submit"
                  variant="contained"
                >
                  добавить продукт

                </Button>
              </Form>

            </Row>
            <Row>
              <div className="productList">
                <FormProducts product={product} />

              </div>
            </Row>
            <Row className="sumKkal">
              сумма калорий за день
            </Row>
          </Row>
        </Col>
      </div>
    </Row>
  );
}
