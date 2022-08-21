import React from 'react';
import Grid from '@mui/material/Grid';
import { Row, Col } from 'reactstrap';
import Button from '@mui/material/Button';

export default function PersonalAccount() {
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
          <Row className="buttonsUser">

            <Button id="button" variant="contained">статистика</Button>
            <Button id="button" variant="contained">Выход</Button>

          </Row>
        </Col>
        <Col
          className="diary"
          xs="8"
        >
          дневник
        </Col>

      </div>
    </Row>
    // <Grid container spacing={2}>
    //   <div className="personalAccount">
    //     <Grid item xs={6} md={4}>
    //       <div className="userInfo">
    //         пользователь
    //       </div>
    //     </Grid>
    //     <Grid item xs={6} md={8}>
    //       <div className="diary">
    //         дневник
    //       </div>
    //     </Grid>
    //   </div>
    // </Grid>
  );
}
