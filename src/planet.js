// Icon.js
import React from 'react';

function Planet({ name, ...props }) {
  return (
    <svg {...props}>
      <use href={`#${name}`} />
    </svg>
  );
}

export default Planet;