import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "./store/transactionsSlice";
function App() {
  const [an, setAn] = useState("");
  const [fsc, setFsc] = useState("");
  const [holdingName, setHoldingName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const { list, index } = useSelector((state) => state.transactions);
  const addTransactionToLocalStore = (obj) => {
    console.log(localStorage.getItem("transactions"));
    let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
    console.log(transactions);
    transactions.push(obj);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    console.log(localStorage);
  };

  useEffect(() => {
    console.log(localStorage);
    let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
    if (transactions) {
      transactions.forEach((transaction) => {
        dispatch(addTransaction(transaction));
      });
    }
  }, []);
  return (
    <>
      <input
        onChange={(event) => setAn(event.target.value)}
        type="text"
        name="an"
        placeholder="Account Number"
      />
      <input
        onChange={(event) => setFsc(event.target.value)}
        type="text"
        name="fsc"
        placeholder="FSC"
      />
      <input
        onChange={(event) => setHoldingName(event.target.value)}
        type="text"
        name="holdingName"
        placeholder="A/C Holder Name"
      />
      <input
        onChange={(event) => setAmount(event.target.value)}
        type="text"
        name="amount"
        placeholder="Amount"
      />
      <button
        onClick={() => {
          addTransactionToLocalStore({
            an: an,
            fsc: fsc,
            holdingName: holdingName,
            amount: amount,
          });
          dispatch(
            addTransaction({
              an: an,
              fsc: fsc,
              holdingName: holdingName,
              amount: amount,
            })
          );
        }}
      >
        Add Transaction
      </button>
      <div className="list"></div>
    </>
  );
}

export default App;
