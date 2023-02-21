import React from 'react';

function BodyInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="body-input">Body:</label>
      <textarea
        data-testid="body"
        placeholder="Enter the Query Params as an Object"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default BodyInput;
