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

ChartJS.register(Title, BarElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend);

export default function Statistic({ stat }) {
  console.log(stat, '{{{{EQQE{EQQEJJKEHJIHQEJ');

  const dateArr = stat.map((el) => el?.date);
  const dateArrReg = dateArr.map((el) => el.replace(/T21:00:00.000Z/gm, ''));

  const newArrKkal = stat.map((el) => el?.total_kkal);
  const newArrProt = stat.map((el) => el?.total_protein);
  const newArrFats = stat.map((el) => el?.total_fats);
  const newArrCarb = stat.map((el) => el?.total_carbohidrates);

  const labels = dateArrReg;

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
        <div style={{ width: '700px' }} className="imgStat">
          {/* <Doughnut data={data} /> */}
          <Bar options={options} data={data} />
        </div>
      </Col>
      <Col>
        <div style={{ width: '700px' }}>
          {/* <Doughnut data={data} /> */}
          <Bar options={options} data={data} />
        </div>
      </Col>
    </Row>
  );
}

// const data = {
//   labels: data2,
//   datasets: [
//     {
//       label: '# of Votes',
//       data: kkal,
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
