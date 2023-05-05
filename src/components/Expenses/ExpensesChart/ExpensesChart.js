import React from 'react';

import ChartPanel from '../../Chart/ChartPanel/ChartPanel';
import PropTypes from 'prop-types';

ExpensesChart.propTypes = {
  expenses: PropTypes.array,
};

function ExpensesChart(props) {
  const months = getMonthNames();
  const chartDataPoints = months.map(month => {
    return {
      label: month,
      value: 0,
    };
  });

  for (const expense of props.expenses) {
    const expenseMonthNumber = expense.date.getMonth();
    chartDataPoints[expenseMonthNumber].value += expense.price;
  }

  return (
      <ChartPanel dataPoints={chartDataPoints}/>
  );
}

function getMonthNames() {
  return Array.from({length: 12}, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString('en', {month: 'short'});
  });
}

export default ExpensesChart;