import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch,currency } = useContext(AppContext);

  //call to dispatch communicates data to app global store.
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const borderRadius = {borderRadius : 200,"font-size":"1.50em",height:"auto"}
  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td>
        <button style={borderRadius} className="btn btn-success fw-bold" onClick={(event) => increaseAllocation(props.name)}>+</button>
      </td>
      <td className="text-danger fw-bold">
        <button style={borderRadius} className="btn btn-danger fw-bold" onClick={(event) => decreaseAllocation(props.name)}>-</button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;

