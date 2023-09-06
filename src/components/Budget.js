import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
const { dispatch } = useContext(AppContext);
  const { expenses,budget,currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    const inb = event.target.value
   

    if(inb > 20_000){
        alert("Value cannot exceed 20_000")
        setNewBudget(budget);
        return
    }

    if(inb < totalExpenses) {
        alert(`Spending (${totalExpenses}) cannot exceed budget (${inb})`)
        setNewBudget(budget);
        return
    } 

    setNewBudget(inb)

    
 

    dispatch({
        type: "SET_BUDGET",
        payload: event.target.value,
      });
  };
  return (
    <div className="alert alert-secondary">
      <span className="pe-2">Budget: {currency}{budget}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
