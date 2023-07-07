import { useUserContext } from "../../hooks/useUserContext";
import { FaPlus } from "react-icons/fa";
import { IoSettings, IoPerson } from "react-icons/io5";

export const PersonalSidebar = () => {
  const { state } = useUserContext();

  return (
    <nav className="personal-sidebar">
      <div className="personal-sidebar__scrollbox">
        <div className="friends">
          <IoPerson />
          <div>Friends</div>
        </div>
        <div className="direct-messages">
          <h4>Direct Messages</h4>
          <FaPlus />
        </div>
      </div>
      <div className="personal-sidebar__infobox">
        <div>
          <img src={state.profilePicture} alt="profile picture" />
          <div>{state.username}</div>
        </div>
        <IoSettings />
      </div>
    </nav>
  );
};
