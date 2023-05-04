import React from 'react'
import './ExpenseItem.css'

export default function ExpenseItem() {
    const expenseDate=new Date(2023, 3, 21)
    const expenseTitle='car insurance';
    const expenseAmount='234';
    const LocationOfExpenditure='lakhanpur'
  return (
    <div className='expense-item'>
        <div>{expenseDate.toDateString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>
                ${expenseAmount}
            </div>
            <div>{LocationOfExpenditure}</div>

        </div>
    </div>
  )
}
