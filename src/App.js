import React from 'react';
import Expenses from './components/Expenses/Expenses';
import Newexpense from './components/newExpenses/Newexpense';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Orai",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Jhansi",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Lucknow",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Kanpur",
    },
    {
      id: "e5",
      title: "Game on (Wooden)",
      amount: 4500,
      date: new Date(2021, 5, 12),
      location: " Akbarpur ",
    },
  ];

  const saveExpenseHandler=(expense)=>{
    console.log(expense);
  }

  return (
    <div>
      <Newexpense onNewexpense={saveExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );

}
export default App;