//'''
//src/components/Table/Table.tsx
import React from 'react';
import './Table.scss';

interface TableProps<T> {
  headers: { key: keyof T; label: string }[];
  data: T[];
  onSort: (key: keyof T) => void;
  sortConfig: { key: keyof T; direction: 'ascending' | 'descending' };
  renderRow: (item: T) => JSX.Element;
}

const Table = <T,>({ headers, data, onSort, sortConfig, renderRow }: TableProps<T>) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {headers.map(header => (
            <th key={String(header.key)} onClick={() => onSort(header.key)}>
              {header.label} <span className="sort-indicator">{sortConfig.key === header.key ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : ''}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 && (
          <tr>
            <td colSpan={headers.length}>Não consta nenhum relatório</td>
          </tr>
        )}
        {data.map(item => renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
//’’’
