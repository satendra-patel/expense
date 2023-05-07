import React ,{useState}from 'react';
import './ExpenseForm.css';

const ExpenseForm=()=> {
    const [enteredtitle,setenteredtitle]=useState('')
    const TitleUpdateHandler=(event)=>{
        setenteredtitle(event.target.value);
    }
    const [EnteredAmount,setEnteredAomunt]=useState('')
    const AmountUpdateHandler=(event)=>{
        setEnteredAomunt(event.target.value);
        console.log(event.target.value);
    }
    const [enterdDate,setenterdDate]=useState('');
    const DateUpdateHandler=(event)=>{
        setenterdDate(event.target.value)
        console.log(event.target.value)
    }
  return (
    <form>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label >Title</label>
            <input type='text' onSubmit={TitleUpdateHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.0' max='100000.0' onSubmit={AmountUpdateHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2023-12-31' onInput={DateUpdateHandler}/>
        </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit' >Submit</button>
        </div>
    </form>
  )
}
export default ExpenseForm
