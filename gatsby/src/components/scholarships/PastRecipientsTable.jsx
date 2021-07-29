// external imports
import React from 'react';
import tw from 'twin.macro';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTable } from 'react-table';

const PastRecipientsTable = ({ columns, data, ...rest }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <TableContainer>
      <h2>Past Recipients</h2>
      <div className="flex flex-col" {...rest}>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup, idx) => (
                    <tr key={`thead-row-${idx}`} {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          key={`thead-head-${idx}`}
                          {...column.getHeaderProps()}
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>

                <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                  {rows.map((row, idx) => {
                    prepareRow(row);
                    return (
                      <>
                        <tr key={`table-row-${row.id}`} {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            const isPrimaryCell = cell.column.Header === 'Name';
                            const isSecondaryCell = !isPrimaryCell;

                            return (
                              <td
                                key={`tbody-cell-${idx}`}
                                {...cell.getCellProps()}
                                css={[
                                  tw`px-6 py-4 text-sm whitespace-nowrap`,
                                  isPrimaryCell && tw`font-medium text-gray-900`,
                                  isSecondaryCell && tw`text-gray-500`,
                                ]}
                              >
                                {cell.render('Cell')}
                              </td>
                            );
                          })}
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </TableContainer>
  );
};

PastRecipientsTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

const TableContainer = styled.section`
  ${tw`flex flex-col items-center justify-center w-full mb-12`};
`;

export default PastRecipientsTable;
