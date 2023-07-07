import { useUserContext } from "../../hooks/useUserContext";
import { FaPlus } from "react-icons/fa";
import { IoSettings, IoPerson } from "react-icons/io5";

export const PersonalSidebar = () => {
  const { state } = useUserContext();

  return (
    <nav className="personal-sidebar">
      <label className="personal-sidebar__label personal-sidebar__friends">
        <input type="radio" name="personal-sidebar" />
        <div>
          <IoPerson />
          <h4>Friends</h4>
        </div>
      </label>
      <div className="personal-sidebar__divider">
        <h5>Direct Messages</h5>
        <FaPlus />
      </div>
      <div className="personal-sidebar__scrollbox"></div>
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
