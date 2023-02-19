import React from 'react';

function Path({ value, onChange }) {
//   const formatPath = (path) => {
//     return  path.trim();
//   };

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="path">Path</label>
      <input
        type="text"
        id="path"
        name="path"
        value={value}
        onChange={handleInputChange}
        data-testid="path"
      />
    </div>
  );
}

export default Path;
