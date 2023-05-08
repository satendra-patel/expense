import React ,{useState}from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=> {
    const [enteredtitle,setenteredtitle]=useState('')
    const [enteredDate,setenterdDate]=useState('');
    const [enteredAmount,setEnteredAomunt]=useState('');


    const TitleUpdateHandler=(event)=>{
       setenteredtitle(event.target.value);
    }
    
    const AmountUpdateHandler=(event)=>{
       setEnteredAomunt(event.target.value);
    }
    
    const DateUpdateHandler=(event)=>{
       setenterdDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredtitle,
            date:new Date(enteredDate),
            amount:enteredAmount
        }
        console.log(expenseData);
        props.onFormsubmission(expenseData);
        setEnteredAomunt('');
        setenterdDate('');
        setenteredtitle('');

    }
  return (
    <form onClick={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label >Title</label>
            <input type='text' value={enteredtitle} onChange={TitleUpdateHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.0' max='100000.0'value={enteredAmount} onChange={AmountUpdateHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={DateUpdateHandler}/>
        </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit' >Submit</button>
        </div>
    </form>
  )
}
export default ExpenseForm
