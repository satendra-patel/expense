import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'
function ExpenseItem(props) {
 

  return (
    <div className='expense-item '>
     <ExpenseDate date={props.date}/>
     <ExpenseDetails amount={props.amount} title={props.title} location={props.location}/>
    </div>
  );
}
export default ExpenseItem;