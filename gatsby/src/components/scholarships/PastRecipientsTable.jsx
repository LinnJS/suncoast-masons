import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';

const PastRecipientsTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <TableContainer>
      <h2>Past Recipients</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

const TableContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    text-align: center;
  }

  table {
    width: 100%;

    th {
      text-align: start;
    }
  }
`;

export default PastRecipientsTable;
