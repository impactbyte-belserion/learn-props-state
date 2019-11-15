import React from 'react';

export default function TableBody(props) {
  const rows = props.employeeData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.deleteEmployee(index)}>Hapus</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}
