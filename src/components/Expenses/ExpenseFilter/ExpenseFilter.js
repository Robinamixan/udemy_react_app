import React from 'react';

import './ExpenseFilter.css';
import PropTypes from 'prop-types';

ExpenseFilter.propTypes = {
  onFilterUpdate: PropTypes.func,
  currentFilter: PropTypes.object
};

function ExpenseFilter(props) {
  const [yearFilter, setYearFilter] = React.useState('');

  const changeYearFilterHandler = (event) => {
    setYearFilter(event.target.value);
    props.onFilterUpdate({
      year: event.target.value,
    });
  };

  return (
    <div className={'expenses-filter'}>
      <div className={'expenses-filter__control'}>
        <label>Filter By Year</label>
        <select onChange={changeYearFilterHandler} value={props.currentFilter.year}>
          <option value={'2024'}>2024</option>
          <option value={'2023'}>2023</option>
          <option value={'2022'}>2022</option>
          <option value={'2021'}>2021</option>
          <option value={'2020'}>2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;