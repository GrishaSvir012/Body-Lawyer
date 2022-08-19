import React from 'react';
import { Col, Row } from 'reactstrap';
import Button from '@mui/material/Button';

export default function HomePage() {
  return (
    <>
      <Row className="firstDiv">
        <Col xs="4" className="plate">
          <img src="https://www.pngmart.com/files/15/Food-Plate-Fish-PNG.png" alt="" />
        </Col>
        <Col xs="8" className="text">
          <Row className="title">

            адвокат тела

          </Row>
          <Row className="text">
            универсальное приложение для планирования рациона,
            которое помогает вам достичь целей в области здоровья и снижения веса
          </Row>
          <Row className="text">
            просто ешьте и укрепляйте свой
            иммунитет — об остальном позаботится адвокат
          </Row>
          <Row className="button">
            <Button id="button" variant="contained">хочу попробовать</Button>
          </Row>
        </Col>
      </Row>
      <div className="secondDiv">
        <h2>адвокат тела</h2>
        <p>
          универсальное приложение для планирования рациона,
          которое помогает вам достичь целей в области здоровья и снижения веса
        </p>
        <p>
          просто ешьте и укрепляйте свой
          иммунитет — об остальном
          позаботится адвокат
        </p>
      </div>

    </>
  );
}
