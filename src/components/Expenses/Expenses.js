import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
        location={props.expenses[0].location}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
        location={props.expenses[1].location}
      />
      <ExpenseItem
         title={props.expenses[2].title}
         amount={props.expenses[2].amount}
         date={props.expenses[2].date}
         location={props.expenses[2].location}
      />
      <ExpenseItem
       title={props.expenses[3].title}
       amount={props.expenses[3].amount}
       date={props.expenses[3].date}
       location={props.expenses[3].location}
      />
    </Card>
  );
}

export default Expenses;