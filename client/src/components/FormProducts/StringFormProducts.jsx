/* eslint-disable camelcase */
import { TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function StringFormProducts(
  // eslint-disable-next-line camelcase
  {
    calories, carbohidrates, fats, food_name, protein, item, weight, num
  },
) {
  const allProduct = useSelector((state) => state.allProduct);
  console.log(item, 'item');
  return (
    <TableBody>
      <TableRow>
        <TableCell>{num}</TableCell>
        <TableCell align="center">{food_name}</TableCell>
        <TableCell align="center">{calories}</TableCell>
        <TableCell align="center">{protein}</TableCell>
        <TableCell align="center">{fats}</TableCell>
        <TableCell align="center">{carbohidrates}</TableCell>
        {/* <TableCell align="center">10</TableCell> */}
      </TableRow>
    </TableBody>
  );
}
