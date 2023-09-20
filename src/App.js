import { useState } from "react";
import FormAddFriend from "./Component/FormAddFriend";
import FriendList from "./Component/FriendList";
import FormSplitBill from "./Component/FormSplitBill";
import Button from "./Component/Button";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriendForm, setAddFriend] = useState(false);
  const [items, setItems] = useState(initialFriends);
  const [showBillForm, setBillForm] = useState(false);
  const [DispalyBill, setDispalyBill] = useState({});
  function handelFormAddFriend() {
    setAddFriend((i) => !i);
  }

  function handelAddFriend(item) {
    setItems((it) => [...it, item]);
  }

  function handelBillForm(temp) {
    if (temp) setBillForm((i) => !i);
    if (showBillForm !== false && temp) {
      setDispalyBill([]);
    }
  }

  function handelDisplayBill(item) {
    setDispalyBill(item);
  }

  function splitBillHandler(val) {
    setItems((items) =>
      items.map((item) =>
        item.id === DispalyBill.id
          ? { ...item, balance: item.balance + val }
          : item
      )
    );
    handelBillForm(1);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          items={items}
          handelBillForm={handelBillForm}
          showBillForm={showBillForm}
          setDispalyBill={handelDisplayBill}
          DispalyBill={DispalyBill}
        ></FriendList>
        {showAddFriendForm && (
          <FormAddFriend
            handelAddFriend={handelAddFriend}
            setAddFriend={setAddFriend}
          ></FormAddFriend>
        )}
        <Button onClick={handelFormAddFriend}>
          {showAddFriendForm ? "Close" : "Add friend"}
        </Button>
      </div>
      {showBillForm ? (
        <FormSplitBill
          DispalyBill={DispalyBill}
          splitBillHandler={splitBillHandler}
        ></FormSplitBill>
      ) : (
        ""
      )}
    </div>
  );
}
