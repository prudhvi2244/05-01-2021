import React, { useState } from "react";

function HookCounter() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 101) + 1,
      },
    ]);
  };
  return (
    <div>
      <br />
      <input
        placeholder="First Name"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />

      <input
        placeholder="Last Name"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <h4>First Name :{name.firstName}</h4>
      <h4>Last Name :{name.lastName}</h4>
      <hr />
      {JSON.stringify(name)}
      <hr />

      <button onClick={addItem}>Add A Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounter;
