import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  const deleteHandler = () => {
    deleteTransaction(transaction.id);
  };

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}{" "}
      </span>
      <button className="delete-btn" onClick={deleteHandler}>
        x
      </button>
    </li>
  );
}
