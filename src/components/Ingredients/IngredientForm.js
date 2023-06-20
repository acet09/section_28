import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = event => {
    setInputValue(event.target.value);
  }

  const submitHandler = event => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={inputValue} onChange={inputChangeHandler} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" />
          </div>
          <div className="ingredient-form__actions">
            <button onClick={submitHandler} type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
