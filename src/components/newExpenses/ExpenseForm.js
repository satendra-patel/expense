import React ,{useState}from 'react';
import './ExpenseForm.css';

const ExpenseForm=()=> {
    // const [enteredtitle,setenteredtitle]=useState('')
    // const [enterdDate,setenterdDate]=useState('');
    // const [EnteredAmount,setEnteredAomunt]=useState('');

    const [userinput,setuserinput]=useState({
        setenterdtitle:'',
        setenterdDate:'',
        setenterdAmount:''

    })

    const TitleUpdateHandler=(event)=>{
        setuserinput((prevState)=>{
            return {
                ...prevState,
                setenterdtitle:event.target.value
            }  
        });
    }
    
    const AmountUpdateHandler=(event)=>{
        setuserinput((prevState)=>{
            return{
                ...prevState,
                setenterdAmount:event.target.value}
        });
        console.log(event.target.value);
    }
    
    const DateUpdateHandler=(event)=>{
        setuserinput((prevState)=>{
            return {
                ...prevState,
                setenterdDate:event.target.value
            }  
        })
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
