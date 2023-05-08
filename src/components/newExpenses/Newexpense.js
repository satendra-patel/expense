import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './Newexpense.css';

const Newexpense=(props) =>{
const saveExpenseHandler=(enteredData)=>{
  const savedData={
    ...enteredData,
    id:Math.random().toString()
  }
  props.onNewExpense(savedData);
  console.log(savedData);
}

  return (
    <div className='new-expense '>
        <ExpenseForm onFormsubmission={saveExpenseHandler}/>
    </div>
  )
}
export default Newexpense;
