import React, { useEffect, useRef, useState } from 'react';
import {
  Row, Col, Breadcrumb, BreadcrumbItem, Form, Input
} from 'reactstrap';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import axios from 'axios';
import format from 'date-fns/format';
import Statistic from '../Statistic/Statistic';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import UserInfoBlock from './UserInfoBlock';

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
        <UserInfoBlock />
        <Col
          className="diary"
          xs="8"
        >
          <Row className="diaryRow">
            <Row className="titleAndInput">
              <Col className="titleDiary">
                твоя статистика питания
              </Col>
              <Col className="inputCol">

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
                    <Input
                      value={`${format(range[0].startDate, 'MM/dd/yyyy')} to ${format(range[0].endDate, 'MM/dd/yyyy')}`}
                      readOnly
                      className="inputBox"
                      // eslint-disable-next-line no-shadow
                      onClick={() => setOpen((open) => !open)}
                    />
                    <div ref={refOne} className="openCalendar2">
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
              </Col>
            </Row>
            <Row className="productListRow" id="statistic">

              <Statistic stat={stat} />

            </Row>
          </Row>
        </Col>
      </div>
    </Row>
  );
}
