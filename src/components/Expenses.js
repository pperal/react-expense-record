
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
    return (
      <Card className="expenses">
          {props.items.map((item)=> <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        />)}
       
      </Card>
    );
  }
  
  export default Expenses;