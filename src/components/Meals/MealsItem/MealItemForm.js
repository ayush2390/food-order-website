import { useState, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputref = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputref.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputref}
        label="Amount"
        input={{
          id: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>

      {!amountIsValid && <p>Entered valid amount</p>}
    </form>
  );
};

export default MealItemForm;
