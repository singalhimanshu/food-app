import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); // disable reloading page
    console.log(`log: ${amountInputRef.current}`);
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; // convert string to int

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
        setIsAmountValid(false);
        return;
    }
    setIsAmountValid(true);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
