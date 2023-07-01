import { Outlet } from "react-router-dom";
import { PersonalSidebar } from "../components/sidebars/PersonalSidebar";

function Personal() {
  return (
    <div className="personal-page">
      <PersonalSidebar />
      <Outlet />
    </div>
  );
}

export default Personal;
