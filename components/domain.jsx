import React from 'react';

function DomainInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="domain-input">Domain:</label>
      <input
        type="text"
        id="domain-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default DomainInput;
