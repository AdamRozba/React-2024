import { useState } from "react";

function Item({ data, handlerMap }) {
  const [value, setValue] = useState(data.name);

  return (
    <div>
      <button
        style={{ marginInlineEnd: "40px", borderRadius: "5px" }}
        onClick={() => handlerMap.toggleResolveItem({ id: data.id })}
      >
        {data.resolved ? "již provedeno" : "hotovo ✅"}
      </button>
      <input
        style={{ borderRadius: "5px", border: "none" }}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => handlerMap.updateItemName({ id: data.id, name: value })}
      />{" "}
      <button
        style={{ marginInlineStart: "40px", borderRadius: "5px" }}
        onClick={() => handlerMap.deleteItem({ id: data.id })}
      >
        smazat 🗑️
      </button>
    </div>
  );
}

export default Item;
