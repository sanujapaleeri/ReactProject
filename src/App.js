
import Expenses from "./components/Expenses/Expenses";

const App = () => {
   const expense=[
    {title:'car insurence',
    amount:'$123',
    date: new Date(2022,4,14)},
    {title:'toilet tissue',
    amount:'$100',
    date:new Date(2022,5,6)},
    {title:'grocery',
    amount:'$190',
    date:new Date(2022,2,12)},
    {title:'council tax',
    amount:'$160',
    date:new Date(2022,2,17)}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expense}/>
    </div>
  ); 
}

export default App;
