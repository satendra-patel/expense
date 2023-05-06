import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css'
function ExpenseItem(props) {
    const [title,setTitle]=useState(props.title);

    const clickHandler=()=>{
        setTitle('updated');

    }
 

  return (
    <div className='expense-item '>
     <ExpenseDate date={props.date}/>
     <div>
        <h2>{title}</h2>
        <div>{props.amount}</div>
        <div>{props.location}</div>
        <button onClick={clickHandler}>update title</button>
     </div>
     
    </div>
  );
}
export default ExpenseItem;