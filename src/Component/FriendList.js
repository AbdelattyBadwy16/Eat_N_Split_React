import Friend from "./Friend";
export default function FriendList({
    items,
    handelBillForm,
    showBillForm,
    setDispalyBill,
    DispalyBill,
  }) {
    return (
      <ul>
        {items.map((item) => (
          <Friend
            friend={item}
            handelBillForm={handelBillForm}
            key={item.id}
            setDispalyBill={setDispalyBill}
            DispalyBill={DispalyBill}
          ></Friend>
        ))}
      </ul>
    );
  }
  