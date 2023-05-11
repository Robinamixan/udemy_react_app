import React from 'react';
import PropTypes from 'prop-types';

import './ChartBar.css';

ChartBar.propTypes = {
  value: PropTypes.any,
  maxValue: PropTypes.any,
  label: PropTypes.any,
};

function ChartBar(props) {
  let barFillPercentage =  0;

  if (props.maxValue > 0) {
    barFillPercentage = Math.round((props.value / props.maxValue) * 100);
  }

  return (
      <div className={'chart-bar'}>
        <div className={'chart-bar__inner'}>
          <div className={'chart-bar__fill'} style={{height: barFillPercentage + '%'}}></div>
        </div>
        <div className={'chart-bar__label'}>{props.label}</div>
      </div>
  );
}

export default ChartBar;