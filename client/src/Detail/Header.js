import { useContext } from "react";
import { UserContext } from "../Users/UserProvider.js";
import "./Header.css";

function Header() {
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
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
      Moje Resty
      {userList.map((user) => (
        <button
          className="header-button"
          key={user.id}
          onClick={() => setLoggedInUser(user.id)}
        >
          {user.name} {(user.id === loggedInUser).toString()}
        </button>
      ))}
    </div>
  );
}

export default Header;
