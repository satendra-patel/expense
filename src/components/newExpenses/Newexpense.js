import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './Newexpense.css';

const Newexpense=(props) =>{

  const [isediting,setisediting]=useState(false);

  const seteditinghandler=()=>{
    setisediting(true);
  }
const saveExpenseHandler=(enteredData)=>{
  const savedData={
    ...enteredData,
    id:Math.random().toString()
  }
  props.onNewexpense(savedData);
  setisediting(false);
  console.log(savedData);
}
const stopEditinghandler=()=>{
  setisediting(false);
}

  return (
    <div className='new-expense '>
        {!isediting&&<button onClick={seteditinghandler}>Add new expense</button>}
        {isediting&&<ExpenseForm onFormsubmission={saveExpenseHandler} onCancel={stopEditinghandler}/>}
    </div>
  )
}
export default Newexpense;
