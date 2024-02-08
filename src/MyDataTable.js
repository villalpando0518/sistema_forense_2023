import React from 'react';

function MyTable({ data }) {
  if (!data) {
    return <p>No hay datos para mostrar.</p>;
  }

  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd', background: '#f2f2f2' }}>
            <th style={{ padding: '8px' }}>Columna 1</th>
            <th style={{ padding: '8px' }}>Columna 2</th>
            <th style={{ padding: '8px' }}>Columna 3</th>
            <th style={{ padding: '8px' }}>Columna 4</th>
            <th style={{ padding: '8px' }}>Columna 5</th>
            <th style={{ padding: '8px' }}>Columna 6</th>
            <th style={{ padding: '8px' }}>Columna 7</th>
            <th style={{ padding: '8px' }}>Columna 8</th>
            <th style={{ padding: '8px' }}>Columna 9</th>
            <th style={{ padding: '8px' }}>Columna 10</th>
            <th style={{ padding: '8px' }}>Columna 11</th>
            <th style={{ padding: '8px' }}>Columna 12</th>
            <th style={{ padding: '8px' }}>Columna 13</th>
            <th style={{ padding: '8px' }}>Columna 14</th>
            <th style={{ padding: '8px' }}>Columna 15</th>
            {/* Agrega más encabezados según sea necesario */}
            <th style={{ padding: '8px' }}>Género</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}>{row[0]}</td>
              <td style={{ padding: '8px' }}>{row[1]}</td>
              <td style={{ padding: '8px' }}>{row[2]}</td>
              <td style={{ padding: '8px' }}>{row[3]}</td>
              <td style={{ padding: '8px' }}>{row[4]}</td>
              <td style={{ padding: '8px' }}>{row[5]}</td>
              <td style={{ padding: '8px' }}>{row[6]}</td>
              <td style={{ padding: '8px' }}>{row[7]}</td>
              <td style={{ padding: '8px' }}>{row[8]}</td>
              <td style={{ padding: '8px' }}>{row[9]}</td>
              <td style={{ padding: '8px' }}>{row[10]}</td>
              <td style={{ padding: '8px' }}>{row[11]}</td>
              <td style={{ padding: '8px' }}>{row[12]}</td>
              <td style={{ padding: '8px' }}>{row[13]}</td>
              <td style={{ padding: '8px' }}>{row[14]}</td>
              <td style={{ padding: '8px' }}>{row[15]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
