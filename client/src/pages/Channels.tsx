import { useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";
import { Outlet } from "react-router-dom";
import { GuildSidebar } from "../components/sidebars/GuildSidebar";

function Channels() {
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
    <div className="channels-page">
      <GuildSidebar />
      <Outlet />
    </div>
  );
}

export default Channels;
