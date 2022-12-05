import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction, deleteTransaction } from "./store/transactionsSlice";
function App() {
  const [an, setAn] = useState("");
  const [fsc, setFsc] = useState("");
  const [holdingName, setHoldingName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const { list, index } = useSelector((state) => state.transactions);
  console.log(list);
  const addTransactionToLocalStore = (obj) => {
    console.log(localStorage.getItem("transactions"));
    let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
    console.log(transactions);
    transactions.push(obj);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    console.log(localStorage);
  };

  const deleteFromList = () => {
    let list = getTransactionFromLocalStorage();
  };
  const getTransactionFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("transactions") || "[]");
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
      <div className="form">
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
      </div>
      <div className="list">
        {list.map((item, index) => (
          <div className="item-container" key={item.payload.fsc}>
            <table className="table" border="1">
              <tr>
                <th>ID</th>
                <th>A/N</th>
                <th>FSC</th>
                <th>Name</th>
                <th>Amount</th>
              </tr>
              <tr>
                <td>{index + 1}</td>
                <td>{item.payload.an}</td>
                <td>{item.payload.fsc}</td>
                <td>{item.payload.holdingName}</td>
                <td>{item.payload.amount}</td>
              </tr>
            </table>
            <button>Edit</button>
            <button
              onClick={() => {
                dispatch(deleteTransaction(item));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
