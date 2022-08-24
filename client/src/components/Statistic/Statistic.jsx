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
import { userStatAdd } from '../../Redux/actions/statisticsAction';

ChartJS.register(Title, BarElement, LinearScale, CategoryScale, ArcElement, Tooltip, Legend);

// const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//   datasets: [{
//     data: [12, 19, 3, 5, 11],
//   }],
// };

export default function Statistic() {
  const [statistic, setStatistic] = useState({});
  const dispatch = useDispatch();
  const stat = useSelector((state) => state.statistics);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!stat.length) {
      dispatch(userStatAdd());
    }
  }, []);
  // console.log(user, '-------USER');
  console.log(stat, '-------STAT');
  const type = stat?.map((el) => el?.Type_of_meal.type);

  // Получаем Дату в уникальном кол-ве!В массив!
  const data2 = stat?.map((el) => el?.date);
  const dataOne = [...new Set(data2)];
  // console.log(dataOne);

  const newArrKkal = [];
  for (let i = 0; i < dataOne.length; i += 1) {
    const KkalSum = stat.filter((el) => el.date === dataOne[i]).map((el) => el?.sum_kkal).reduce((acc, number) => acc + number, 0);
    newArrKkal.push(KkalSum);
    console.log(KkalSum, 'КалоРиии');
  }
  console.log(newArrKkal, 'МАССИВ СУММЫ КАЛОРИЙ');

  const newArrProt = [];
  for (let i = 0; i < dataOne.length; i += 1) {
    const protSum = stat.filter((el) => el.date === dataOne[i]).map((el) => el?.sum_protein).reduce((acc, number) => acc + number, 0);
    newArrProt.push(protSum);
    console.log(protSum, 'protein');
  }
  console.log(newArrProt, 'МАССИВ СУММЫ БЕЛКОВ');

  const newArrFats = [];
  for (let i = 0; i < dataOne.length; i += 1) {
    const fatsSum = stat.filter((el) => el.date === dataOne[i]).map((el) => el?.sum_fats).reduce((acc, number) => acc + number, 0);
    newArrFats.push(fatsSum);
    console.log(fatsSum, 'fats');
  }
  console.log(newArrFats, 'МАССИВ СУММЫ ЖИРОВ');

  const newArrCarb = [];
  for (let i = 0; i < dataOne.length; i += 1) {
    const carbSum = stat.filter((el) => el.date === dataOne[i]).map((el) => el?.sum_carbohidrates).reduce((acc, number) => acc + number, 0);
    newArrCarb.push(carbSum);
    console.log(carbSum, 'fats');
  }
  console.log(newArrCarb, 'МАССИВ СУММЫ УГЛЕВОДОВ');

  const labels = dataOne;

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
    <div>
      <h1>
        Ваша статика:
      </h1>
      <div style={{ width: '700px' }}>
        {/* <Doughnut data={data} /> */}
        <Bar options={options} data={data} />
      </div>
    </div>
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
