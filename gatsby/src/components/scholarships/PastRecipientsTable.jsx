// external imports
import React from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
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
  ${tw`flex flex-col items-center justify-center w-full mb-12`};

  table {
    ${tw`w-full`};

    th {
      ${tw`text-left`};
    }
  }
`;

export default PastRecipientsTable;
