import React,{useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
 const [filteredyear,setfilteredyear]=useState('2023');

 const filteredyearhandler=(selectedyear)=>{
  setfilteredyear(selectedyear);

 }

 const filteredexpenses=props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===filteredyear;
 });



  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter selected={filteredyear} onChangeFilter={filteredyearhandler}/>
      <ExpensesList items={filteredexpenses}/>
    </Card>
    </li>
  );
}

export default Expenses;