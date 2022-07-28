import React from 'react';
import { TableContainer } from './CoinsTable.styles';
import CoinsTableHeadr from '../CoinsTableNav/CoinsTableNav';
import CoinsTableData from './CoinsTableData/CoinsTableData';

export default function CoinTable({ ...rest}) {
  return (
    <TableContainer>
      <CoinsTableHeadr />
      <hr />
      <CoinsTableData {...rest}/>
    </TableContainer>
  )
}
