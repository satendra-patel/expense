
import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      place:'kanhapur',
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),place:'lucknow', },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      place:'akbarpur',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      place:'surat',
    },
  ];
  return expenses.map((i) => { 
    return  <div>
    <ExpenseItem
      title={i.title}
      date={i.date}
      place={i.place}
      amount={i.amount}
    ></ExpenseItem>
    </div>
  }
  );
  
}

export default App;
