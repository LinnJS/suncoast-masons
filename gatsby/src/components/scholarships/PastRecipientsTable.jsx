import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
          {headerGroups.map((headerGroup, idx) => (
            <tr key={`thead-row-${idx}`} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={`thead-head-${idx}`} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return (
              <tr key={`tbody-row-${idx}`} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={`tbody-cell-${idx}`} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

PastRecipientsTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
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
