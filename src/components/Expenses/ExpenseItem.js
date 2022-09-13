import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteExpenseHandler = () => {
    props.onDeleteExpense(props.id);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__right">
            <div className="delete-btn" onClick={deleteExpenseHandler}>
              x
            </div>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
