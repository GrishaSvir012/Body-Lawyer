import React, { useEffect, useRef, useState } from 'react';
import {
  Row, Col, Breadcrumb, BreadcrumbItem, Form, Input
} from 'reactstrap';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import axios from 'axios';
import format from 'date-fns/format';
import Statistic from '../Statistic/Statistic';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function Statistics() {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate('/personalaccount');
  };

  const [stat, setStat] = useState([]);
  console.log(stat, '________STAT');
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  useEffect(() => {
    axios.get(`/statistics?start=${range[0].startDate.toLocaleString('en-ZA', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })}&end=${range[0].endDate.toLocaleString('en-ZA', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })}`).then((res) => setStat(res.data));
  }, [range]);
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);
  console.log(range);

  const hideOnClickOutSide = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', hideOnClickOutSide, true);
  }, []);
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
              style={{ background: 'url(https://n1s1.hsmedia.ru/af/f0/de/aff0dee82ae8778d2f88e30ac6254a67/400x600_0x0a330ca2_20593006671527601517.jpeg) no-repeat 50% 50%' }}
            />
          </Row>
          <Row className="userInfoList">
            <div>
              <ul>
                <li>
                  имя: Анна
                </li>
                <li>
                  вес: 60 кг
                </li>
                <li>
                  рост: 170 см
                </li>
                <li>
                  цель: похудеть
                </li>
              </ul>
            </div>
          </Row>
          <Row className="buttonsUser">
            <Button onClick={backHandler} id="button" variant="contained">назад</Button>
            <Button id="button" variant="contained">выход</Button>
          </Row>
        </Col>
        <Col
          className="diary"
          xs="8"
        >
          <Row className="diaryRow">
            {/* <Row>
              <Col>
                статистика
              </Col>
            </Row> */}
            <Row className="buttonPeriod">
              <div>
                {/* <Breadcrumb>
                  <BreadcrumbItem>
                    <a href="#">
                      за текущий день
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#">
                      за неделю
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#">
                      за месяц
                    </a>
                  </BreadcrumbItem>
                </Breadcrumb> */}
                <input
                  value={`${format(range[0].startDate, 'MM/dd/yyyy')} to ${format(range[0].endDate, 'MM/dd/yyyy')}`}
                  readOnly
                  className="inputBox"
                  // eslint-disable-next-line no-shadow
                  onClick={() => setOpen((open) => !open)}
                />
                <div ref={refOne}>
                  {open
      && (
        <DateRangePicker
          onChange={(item) => setRange([item.selection])}
          editableDateInputs
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={2}
          direction="horizontal"
          className="calendarElement"
        />
      )}
                </div>
              </div>
            </Row>
            <Row>
              <div className="blockStat">
                <Statistic stat={stat} />
              </div>
            </Row>
          </Row>
        </Col>
      </div>
    </Row>
  );
}
