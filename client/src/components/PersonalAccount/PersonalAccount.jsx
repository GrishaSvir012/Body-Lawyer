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
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/material';
import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import ScrollInput from '../ScrollInput/ScrollInput';
import MyDate from '../Date/MyDate';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function PersonalAccount() {
  const navigate = useNavigate();
  const statHandler = () => {
    navigate('/personalaccount/statistics');
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
            <div
              className="img"
              style={{ background: 'url(https://n1s1.hsmedia.ru/af/f0/de/aff0dee82ae8778d2f88e30ac6254a67/400x600_0x0a330ca2_20593006671527601517.jpeg) no-repeat 50% 50%' }}
            />
          </Row>
          <Row className="userInfoList">
            <div>
              <ul>
                <li>
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
                  </>
                )}
              </ul>
            </div>
          </Row>
          <Row className="buttonsUser">

            <Button id="button" variant="contained" onClick={statHandler}>статистика</Button>
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
                дневник питания
              </Col>
              {/* <Box sx={{ width: '100%' }}> */}
              <Col>
                {/* <Box sx={{
                    width: '%' }}
                  > */}
                <>
                  <input
                    value={calendar}
                    readOnly
                    className="inputBox"
                    // eslint-disable-next-line no-shadow
                    onClick={() => setOpen((open) => !open)}
                  />
                  <div ref={refOne}>
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
                {/* </Box> */}
              </Col>
              {/* </Box> */}
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
              <Form onSubmit={submitHandler}>
                <ScrollInput />
                <Input
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
                <TableContainer
                  sx={{
                    height: 300,
                  }}
                >
                  <Table>
                    {/* sx={{
                     height: 'max-content',
                   }} */}
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">наименование продукта</TableCell>
                        <TableCell align="center">гр</TableCell>
                        <TableCell align="center">к</TableCell>
                        <TableCell align="center">б</TableCell>
                        <TableCell align="center">ж</TableCell>
                        <TableCell align="center">у</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell align="center">борщ</TableCell>
                        <TableCell align="center">300</TableCell>
                        <TableCell align="center">300</TableCell>
                        <TableCell align="center">4</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">10</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell align="center">борщ</TableCell>
                        <TableCell align="center">300</TableCell>
                        <TableCell align="center">300</TableCell>
                        <TableCell align="center">4</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">10</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell align="center">борщ</TableCell>
                        <TableCell align="center">300</TableCell>
                        <TableCell align="center">300</TableCell>
                        <TableCell align="center">4</TableCell>
                        <TableCell align="center">20</TableCell>
                        <TableCell align="center">10</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>-</TableCell>
                        <TableCell align="center">Сумма калорий за завтрак</TableCell>
                        <TableCell align="center">-</TableCell>
                        <TableCell align="center">-</TableCell>
                        <TableCell align="center">-</TableCell>
                        <TableCell align="center">-</TableCell>
                        <TableCell align="center">-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Row>
            <Row>
              сумма калорий за день
            </Row>
          </Row>
        </Col>
      </div>
    </Row>
  );
}
