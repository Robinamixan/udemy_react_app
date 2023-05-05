import React from 'react';

import ExpensesList from './components/Expenses/ExpensesList/ExpensesList';
import ExpenseFormWrapper from './components/Expenses/ExpenseFormWrapper/ExpenseFormWrapper';

import dummyExpenses from './dummies/expenseItems';

function App() {
  const [expenses, setExpenses] = React.useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [
        expense,
        ...prevExpenses
      ];
    });
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