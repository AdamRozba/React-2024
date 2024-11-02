import { useContext, useState } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import AddMemberForm from "./AddMemberForm";
import Member from "./Member";

function MemberList() {
  const { data, handlerMap } = useContext(DetailContext);
  const { userMap, userList, loggedInUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

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
      <AddMemberForm
        show={show}
        data={data}
        userList={userList}
        handlerMap={handlerMap}
        handleClose={() => setShow(false)}
      />
      <div>
        List Členů{" "}
        {data.owner === loggedInUser ? (
          <button style={{ borderRadius: "5px" }} onClick={() => setShow(true)}>
            Přidat člena
          </button>
        ) : (
          ""
        )}
      </div>
      <Member memberId={data.owner} data={userMap[data.owner]} isOwner={true} />
      {data.memberList.map((memberId) => (
        <Member
          key={memberId}
          memberId={memberId}
          data={userMap[memberId]}
          handlerMap={handlerMap}
          showRemoveButton={
            loggedInUser === data.owner || memberId === loggedInUser
          }
        />
      ))}
    </div>
  );
}

export default MemberList;
