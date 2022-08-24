import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Form, Input } from 'reactstrap';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Statistics() {
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
            <Button id="button" variant="contained">назад</Button>
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
                тут будет статистика
              </div>
            </Row>
          </Row>
        </Col>
      </div>
    </Row>
  );
}
