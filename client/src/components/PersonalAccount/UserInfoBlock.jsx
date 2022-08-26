import React from 'react';
import { Col, Row } from 'reactstrap';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export default function UserInfoBlock() {
  const location = useLocation();
  const person = useSelector((state) => state.body);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const statHandler = () => {
    navigate('/personalaccount/statistics');
  };

  const backHandler = () => {
    navigate('/personalaccount');
  };
  return (
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
                      && 'набрать вес'}
                      {user.body.mission === 'save'
                      && 'сохранить вес'}
                      {user.body.mission === 'slim'
                      && 'похудеть'}
                    </li>
                    <li>
                      норма калорий:
                      {/* {' '}
                      {person[0]} */}
                    </li>
                  </>
                )}
          </ul>
        </div>
      </Row>
      <Row className="buttonsUser">
        {location.pathname.includes('statistics') ? (
          <>
            <Button className="stat" id="button" variant="contained" onClick={backHandler}>назад</Button>
            <Button className="exit" id="button" variant="contained">выход</Button>
          </>
        )
          : (
            <>
              <Button className="stat" id="button" variant="contained" onClick={statHandler}>статистика</Button>
              <Button className="exit" id="button" variant="contained">выход</Button>

            </>
          )}

      </Row>
    </Col>
  );
}
