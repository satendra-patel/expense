import React from 'react';
import ExpenseItem from './ExpenseItem';

export default function ExpensesList(props) {
   

    if (props.items.length===0){
        return (<h2 className='expense-list___fallback'>No expense found </h2>)
    }

    if(props.items.length===1){
        return (<ul className='expense-list'>{props.items.map(expense=>(<ExpenseItem
            key={expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}/>
            ))}<p className='expense-list___fallback'>add more expenses</p></ul>)
    }
     
    return (<ul className='expense-list'>{
        props.items.map(expense=>(<ExpenseItem
            key={expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}/>
            ))
        }</ul>)
    
}
