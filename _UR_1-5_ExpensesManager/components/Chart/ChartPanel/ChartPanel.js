import React from 'react';

import ChartBar from '../ChartBar/ChartBar';

import './ChartPanel.css';
import PropTypes from 'prop-types';

ChartPanel.propTypes = {
  dataPoints: PropTypes.array,
};

function ChartPanel(props) {
  const values = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...values);

  return (
      <div className={'chart'}>
        {props.dataPoints.map((dataPoint) => {
          return <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={maxValue}
              label={dataPoint.label}
          />;
        })}
      </div>
  );
}

export default ChartPanel;