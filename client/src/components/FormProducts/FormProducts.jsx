import {
  TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import StringFormProducts from './StringFormProducts';

// eslint-disable-next-line camelcase
export default function FormProducts() {
  const allProduct = useSelector((state) => state.allProduct);
  const product = useSelector((state) => state.products);
  console.log(allProduct);
  return (
    <TableContainer>
      <Table>
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

        {allProduct.length > 0
        && allProduct.map((el, i) => (
          <StringFormProducts
            num={i + 1}
            key={el.id}
            item={el}
            weight={el.product_weight}
            calories={el.sum_kkal}
            carbohidrates={el.sum_carbohidrates}
            fats={el.sum_fats}
            food_name={el.Product_info.food_name}
            protein={el.sum_protein}
          />
        ))}
      </Table>
    </TableContainer>
  );
}
