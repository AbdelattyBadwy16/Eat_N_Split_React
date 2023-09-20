import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ handelAddFriend, setAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");
    function handelSubmit(e) {
      e.preventDefault();
      if (!image || !name) return;
      const newFriend = {
        name,
        image,
        balance: 0,
        id: crypto.randomUUID(),
      };
      handelAddFriend(newFriend);
      setImage("https://i.pravatar.cc/48?u=118836");
      setName("");
      setAddFriend((item) => !item);
    }
    return (
      <form className="form-add-friend" onSubmit={handelSubmit}>
        <label>Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
  
        <label>Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
  
        <Button>Add</Button>
      </form>
    );
  }