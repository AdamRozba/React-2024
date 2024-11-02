import { useContext, useState } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import UpdateNameForm from "./UpdateNameForm";

function Toolbar() {
  const [show, setShow] = useState(false);
  const { data, handlerMap } = useContext(DetailContext);
  const { loggedInUser } = useContext(UserContext);

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
      <UpdateNameForm
        show={show}
        handleClose={() => setShow(false)}
        data={data}
        handlerMap={handlerMap}
      />
      {data.name}{" "}
      {loggedInUser === data.owner ? (
        <button
          style={{ marginLeft: "15px", borderRadius: "5px" }}
          onClick={() => setShow(true)}
        >
          Změnit název
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Toolbar;
