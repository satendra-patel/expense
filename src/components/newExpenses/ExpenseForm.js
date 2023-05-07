import React ,{useState}from 'react';
import './ExpenseForm.css';

const ExpenseForm=()=> {
    const [enteredtitle,setenteredtitle]=useState('')
    const [enterdDate,setenterdDate]=useState('');
    const [EnteredAmount,setEnteredAomunt]=useState('');

    // const [userinput,setuserinput]=useState({
    //     setenterdtitle:'',
    //     setenterdDate:'',
    //     setenterdAmount:''

    // })

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
            date:new Date(enterdDate),
            amount:EnteredAmount
        }
        console.log(expenseData);
    }
  return (
    <form onClick={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label >Title</label>
            <input type='text' onChange={TitleUpdateHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.0' max='100000.0' onChange={AmountUpdateHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2023-12-31' onChange={DateUpdateHandler}/>
        </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit' >Submit</button>
        </div>
    </form>
  )
}
export default ExpenseForm
