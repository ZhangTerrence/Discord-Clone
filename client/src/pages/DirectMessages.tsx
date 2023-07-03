import { useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";

function DirectMessages() {
  const { state, dispatch } = useUserContext();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:4000/api/users/649633c0670b914becb868ba");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "GET_USER", payload: json });
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div className="direct-messages-page">
      <h3>Direct messages page.</h3>
      <div>{state.username}</div>
      <img src={state.profilePicture} alt="pfp" />
    </div>
  );
}

export default DirectMessages;
