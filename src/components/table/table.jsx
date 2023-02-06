import React from 'react';
import './table.scss';

//Table imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1143455,
      product: 'Acer nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      costomer: 'Teddy Westside Mosby',
      date: '1 March',
      amount: 684,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 1143455,
      product: 'Acer nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      costomer: 'Michell Doe',
      date: '11 April',
      amount: 684,
      method: 'Cradit Card',
      status: 'Approved',
    },
    {
      id: 1143455,
      product: 'Acer nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      costomer: 'Regine Philengi',
      date: '1 March',
      amount: 684,
      method: 'Cash on Delivery',
      status: 'Pending',
    },
    {
      id: 1143455,
      product: 'Acer nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      costomer: 'Jhonny Depp',
      date: '1 March',
      amount: 684,
      method: 'Credit Card',
      status: 'Pending',
    },
    {
      id: 1143455,
      product: 'Acer nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      costomer: 'Chanandlier Bong',
      date: '1 March',
      amount: 684,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 1143455,
      product: 'Acer nitro 5',
      img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
      costomer: 'Ross Galler',
      date: '1 March',
      amount: 684,
      method: 'Cash on Delivery',
      status: 'Pending',
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">IMG</TableCell>
            <TableCell className="tableCell">Costumer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="asdas" className="image" />
                  {row.product}
                </div>
              </TableCell>

              <TableCell className="tableCell">{row.costomer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
