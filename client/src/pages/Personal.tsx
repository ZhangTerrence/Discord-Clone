import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/PersonalSidebar/Sidebar";

function Personal() {
  return (
    <div className="personal-page">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Personal;
