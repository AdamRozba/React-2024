import { useContext } from "react";
import { DetailContext } from "./DetailProvider";
import Item from "./Item";

function ItemList() {
  const { data, handlerMap, showResolved, toggleShowResolved } =
    useContext(DetailContext);

  return (
    <div
      style={{
        backgroundColor: "#DBD3C6",
        border: "1px solid grey",
        borderRadius: "5px",
        margin: "8px",
        padding: "8px",
      }}
    >
      Název listu{" "}
      <button
        style={{ marginBottom: "15px ", borderRadius: "5px" }}
        onClick={() => toggleShowResolved()}
      >
        {showResolved ? "pouze neudělané" : "všechny položku"}
      </button>
      <div>
        {data.itemList.map((item) => (
          <Item key={item.id} data={item} handlerMap={handlerMap} />
        ))}
      </div>
      <button
        style={{ borderRadius: "5px", margin: "15px 0" }}
        onClick={() => handlerMap.addItem()}
      >
        přidat položku ➕
      </button>
    </div>
  );
}

export default ItemList;
