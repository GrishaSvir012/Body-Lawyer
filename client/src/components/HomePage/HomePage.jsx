import React, { useRef } from 'react';
import { Col, Row } from 'reactstrap';
import Button from '@mui/material/Button';
import ChatPage from '../Chat/ChatPage';
import apple from './apple.svg';
import NavBar from '../NavBar/NavBar';

export default function HomePage() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <>
      <Row className="firstRow">
        <Col className="text">
          <div className="underblock">
            <Row className="title" id="advokat">
              адвокат тела
            </Row>
            <Row className="text" id="textmain">
              универсальное приложение для планирования рациона,
              которое помогает вам достичь целей в области здоровья и снижения веса
              просто ешьте и укрепляйте свой
              иммунитет — об остальном позаботится адвокат
            </Row>
            <Row className="button">
              <Button className="testButton" id="button" variant="contained" onClick={executeScroll}>узнать подробнее</Button>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="secondRow">
        <div style={{ position: 'absolute' }} ref={myRef} />
        <Col>
          <div className="secondRowTitle">
            <h1>
              почему
              {' '}
              <span>  адвокат тела  </span>
              {' '}
              именно то, что вам нужно?
            </h1>
          </div>
          <div className="round">
            <img src={apple} alt="apple" />
          </div>
        </Col>
      </Row>
      {/* <Row className="thirdRow">
        <div className="thirdRow">

          <ChatPage />
        </div>
      </Row> */}

    </>

  // export default function HomePage() {
  //   return (
  //     <ChatPage />

  );
}
