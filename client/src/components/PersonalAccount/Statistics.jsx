import React from 'react';
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
import Statistic from '../Statistic/Statistic';

export default function Statistics() {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate('/personalaccount');
  };
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
            <img src="https://wl-adme.cf.tsp.li/resize/728x/jpg/828/489/b2756c5cdd8b6216f063d69448.jpg" alt="img" />

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
            <Row>
              <Col>
                статистика
              </Col>
            </Row>
            <Row className="buttonPeriod">
              <div>
                <Breadcrumb>
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
                </Breadcrumb>
              </div>
            </Row>
            <Row>
              <div className="blockStat">
                <Statistic />
              </div>
            </Row>
          </Row>
        </Col>
      </div>
    </Row>
  );
}
