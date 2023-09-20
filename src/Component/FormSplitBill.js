import { useState } from "react";
import Button from "./Button";
export default function FormSplitBill({ DispalyBill, splitBillHandler }) {
  const [billValue, setBillValue] = useState(0);
  const [yourValue, setYourValue] = useState(0);
  const [whoPay, setWhoPay] = useState("");
  const friendPay = billValue - yourValue;

  function handelSubmit(e) {
    e.preventDefault();

    if (!billValue) return;
    splitBillHandler(whoPay !== "friend" ? friendPay : -1 * +yourValue);
  }

  return (
    <form className="form-split-bill" onSubmit={handelSubmit}>
      <h2>Split a bill with {DispalyBill.name}</h2>

      <label>Bill Value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      ></input>

      <label>Your expense</label>
      <input
        type="text"
        value={yourValue}
        onChange={(e) => {
          +e.target.value > +billValue
            ? setYourValue(billValue)
            : setYourValue(e.target.value);
        }}
      ></input>

      <label>{DispalyBill.name}`s</label>
      <input type="text" value={friendPay} disabled></input>

      <label>Who is paying the bill</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{DispalyBill.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
