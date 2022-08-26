/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Chart as ChartJS, ArcElement, Tooltip,
  Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { userStatAdd } from '../../Redux/actions/statisticsAction';
import { getUserBodyGet } from '../../Redux/actions/getBodyAction';

ChartJS.register(Title, BarElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend);

export default function Statistic({ stat }) {
  const personInfo = useSelector((state) => state.getBodyInfo);
  const dateArr = stat.map((el) => el?.date);
  const dateArrReg = dateArr.map((el) => el.replace(/T21:00:00.000Z/gm, ''));

  const newArrKkal = stat.map((el) => el?.total_kkal);
  const newArrProt = stat.map((el) => el?.total_protein);
  const newArrFats = stat.map((el) => el?.total_fats);
  const newArrCarb = stat.map((el) => el?.total_carbohidrates);
  const labels = dateArrReg.map((el) => el.replace(/\d*$/, (s) => (`${+s + 1}`)));

  // console.log(labels);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserBodyGet());
  }, []);

  const newArrKkalNeed = personInfo.map((el) => el?.calories_needed.toString());
  const newArrProtNeed = personInfo.map((el) => el?.protein_needed.toString());
  const newArrFatsNeed = personInfo.map((el) => el?.fats_needed.toString());
  const newArrCarbNeed = personInfo.map((el) => el?.carbohidrates_needed.toString());
  const labels2 = [`Калории: ${newArrKkalNeed} Белки: ${newArrProtNeed} Жиры: ${newArrFatsNeed} Углеводы: ${newArrCarbNeed}`];
  const dataNeed = {

    labels: labels2,
    datasets: [
      {
        label: 'Калории',
        data: newArrKkalNeed,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Белки',
        data: newArrProtNeed,
        backgroundColor: 'rgba(53, 144, 111, 0.5)',
      },
      {
        label: 'Жиры',
        data: newArrFatsNeed,
        backgroundColor: 'rgba(53, 170, 190, 0.5)',
      },
      {
        label: 'Углеводы',
        data: newArrCarbNeed,
        backgroundColor: 'rgba(53, 100, 200, 0.5)',
      },

    ],
  };
  const optionsNeed = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Дневная норма питания',
      },
    },
  };

  const data = {

    labels,
    datasets: [
      {
        label: 'Калории',
        data: newArrKkal,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Белки',
        data: newArrProt,
        backgroundColor: 'rgba(53, 144, 111, 0.5)',
      },
      {
        label: 'Жиры',
        data: newArrFats,
        backgroundColor: 'rgba(53, 170, 190, 0.5)',
      },
      {
        label: 'Углеводы',
        data: newArrCarb,
        backgroundColor: 'rgba(53, 100, 200, 0.5)',
      },

    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Статистика вашего питания',
      },
    },
  };

  return (
    <Row className="twoStat">
      <Col>
        <div style={{ width: '100%' }} className="imgStat">
          {/* <Doughnut data={data} /> */}
          <Bar options={optionsNeed} data={dataNeed} />
        </div>
      </Col>
      <Col>
        <div style={{ width: '100%' }}>
          {/* <Doughnut data={data} /> */}
          <Bar options={options} data={data} />
        </div>
      </Col>
    </Row>
  );
}
