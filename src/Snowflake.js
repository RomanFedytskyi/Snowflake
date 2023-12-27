import React from 'react';
import './Snowflake.css';

const Snowflake = ({ size, left, top }) => {
  const snowflakeStyle = {
      fontSize: size,
      left: `${left}px`,
      top: `${top}px`,
      position: 'absolute',
  };

  return <div className="snowflake" style={snowflakeStyle}>❄️</div>;
};

export default Snowflake;
