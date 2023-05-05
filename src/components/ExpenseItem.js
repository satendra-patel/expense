import React ,{useState}from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem=(props)=> {
  const { expenses, onDeleteExpense } = props;

const handleDeleteClick=() =>{
    onDeleteExpense(<div>expense deleted</div>)
    console.log('done')
  }
  
    
  return (
    <div className='expense-item'>  
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div>{props.place}</div>
            <div className='expense-item__price'>
                ${props.amount}
            </div>
           

        </div>
        <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}
export default ExpenseItem;
