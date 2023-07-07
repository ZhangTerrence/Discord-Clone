import { Outlet } from "react-router-dom";
import { PersonalSidebar } from "../../../components/Sidebars/Personal";

function Personal() {
  return (
    <div className="personal-page">
      <PersonalSidebar />
      <Outlet />
    </div>
  );
}

export default Personal;
