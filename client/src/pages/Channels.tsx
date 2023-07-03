import { useEffect } from "react";
import { useUserContext } from "../hooks/useUserContext";
import { Outlet } from "react-router-dom";
import { GuildSidebar } from "../components/sidebars/GuildSidebar";

function Channels() {
  return (
    <div className="channels-page">
      <GuildSidebar />
      <Outlet />
    </div>
  );
}

export default Channels;
