import React from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Form, Input } from 'reactstrap';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

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
              <Col>
                дата
              </Col>
            </Row>
            <Row className="buttonMeals">
              <div>
                <Breadcrumb>
                  <BreadcrumbItem>
                    <a href="#">
                      завтрак
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#">
                      обед
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#">
                      ужин
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#">
                      перекус
                    </a>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Row>
            <Row className="inputProducts">
              <Form>

                <select className="form-select" aria-label="Default select example">
                  <option selected>выберите продукт</option>
                  <option value="1">Борщ</option>
                  <option value="2">Борщ</option>
                  <option value="3">Борщ</option>
                  <option value="3">Борщ</option>
                  <option value="3">Борщ</option>
                  <option value="3">Борщ</option>
                  <option value="3">Борщ</option>
                  <option value="3">Борщ</option>
                </select>
                <Input
                  name="gr"
                  placeholder="введите количество граммов"
                  type="text"
                />
                <Button id="button" type="submit" variant="contained">добавить продукт</Button>
              </Form>

            </Row>
            <Row>
              <div className="productList">
                <TableContainer
                  sx={{
                    height: 300,
                  }}
                >
                  <Table sx={{
                    height: 'max-content',
                  }}
                  >
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
