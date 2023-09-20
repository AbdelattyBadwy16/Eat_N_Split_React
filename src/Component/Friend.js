import Button from "./Button";
export default function Friend({ friend, handelBillForm, setDispalyBill, DispalyBill }) {
    return (
      <li>
        <img src={friend.image}></img>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}$ .
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {Math.abs(friend.balance)}$ .
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even .</p>}
        <Button
          onClick={() => {
            const x =
              DispalyBill.id === friend.id || DispalyBill.id === undefined;
            setDispalyBill(friend);
            handelBillForm(x);
          }}
        >
          {DispalyBill.id === friend.id ? "Close" : "Select"}
        </Button>
      </li>
    );
  }