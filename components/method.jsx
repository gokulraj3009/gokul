import React from 'react';

function MethodSelect({ value, onChange }) {
  return (
    <div>
      <label htmlFor="method-select">Method:</label>
      <select id="method-select" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
    </div>
  );
}

export default MethodSelect;
