import React from 'react';

import ExpensesList from './components/Expenses/ExpensesList/ExpensesList';

import expenses from './dummies/expenseItems';

function App() {
  return (
      <ExpensesList expenses={expenses}/>
  );
}

export default App;