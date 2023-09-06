import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);

  const handleCurrencyChange = (event) => {
    const inc = event.target.value;
    setNewCurrency(inc);

    dispatch({
      type: "CHG_CURRENCY",
      payload: event.target.value,
    });
  };

  return (
    <div className="row">
      <div className="col-12 card">
        <div className="card-body">
          <label htmlFor="inputGroupSelect01">Currency</label>
          <select
            className="custom-select alert alert-warning"
            id="inputGroupSelect02"
            onChange={handleCurrencyChange}
          >
            <option value="$" name="Dollar">
              $ Dollars
            </option>
            <option value="£" name="Pound">
              £ Pounds
            </option>
            <option value="€" name="Euro">
              € Euro
            </option>
            <option value="₹" name="Ruppee">
              ₹ Ruppee
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Currency;
