import React from 'react';

import ExpensesList from './components/Expenses/ExpensesList/ExpensesList';
import ExpenseFormWrapper from './components/Expenses/ExpenseFormWrapper/ExpenseFormWrapper';

import expenses from './dummies/expenseItems';

function App() {
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
      <div>
        <ExpenseFormWrapper onAddExpense={addExpenseHandler}/>
        <ExpensesList expenses={expenses}/>
      </div>
  );
}

export default App;