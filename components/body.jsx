import React from 'react';

function BodyInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="body-input">Body:</label>
      <textarea
        id="body-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default BodyInput;
