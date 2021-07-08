
import React from 'react';
import * as icons from './icons/index';

const Icons = ({ type, color, filled, width, height, onClick, className }) => {

  const iconJsx = icons[type];

  if (!iconJsx) {
    return null;
  }

  return (
    <span className={className} onClick={onClick}>
      {iconJsx(color, filled, width, height)}
    </span>
  );
}

export default Icons;
