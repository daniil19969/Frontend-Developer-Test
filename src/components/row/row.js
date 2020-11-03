import React from 'react';

import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="left">
        {left}
      </div>
      <div className="right">
        {right}
      </div>
    </div>
  );
};


export default Row;