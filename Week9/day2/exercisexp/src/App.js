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
  const list = useSelector((state) => state.transactions);
  const addTransactionToLocalStore = () => {};
  useEffect(() => {
    console.log(localStorage);
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
        onClick={() =>
          dispatch(
            addTransaction({
              an: an,
              fsc: fsc,
              holdingName: holdingName,
              amount: amount,
            })
          )
        }
      >
        Add Transaction
      </button>
      <div className="list"></div>
    </>
  );
}

export default App;
