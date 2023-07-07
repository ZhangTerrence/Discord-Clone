import { useNavigate } from "react-router-dom";
import { open, close } from "../../utilities/modalHandlers";
import { FaPlus, FaEnvelope, FaLock } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export const Signup = () => {
  const navigate = useNavigate();

  return (
    <dialog
      id="signup"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === "signup") close("signup");
      }}
    >
      <form className="signup-modal">
        <span className="signup-modal__close" onClick={() => close("signup")}>
          <FaPlus />
        </span>
        <h2 className="signup-modal__header">Register</h2>
        <div className="signup-modal__input">
          <span>
            <IoPerson />
          </span>
          <input id="signup-username" type="username" placeholder=" " required />
          <label htmlFor="signup-username">Username</label>
        </div>
        <div className="signup-modal__input">
          <span>
            <FaEnvelope />
          </span>
          <input id="signup-email" type="email" placeholder=" " required />
          <label htmlFor="signup-email">Email</label>
        </div>
        <div className="signup-modal__input">
          <span>
            <FaLock />
          </span>
          <input id="signup-password" type="password" placeholder=" " required />
          <label htmlFor="signup-password">Password</label>
        </div>
        <button className="signup-modal__button" onClick={() => navigate("/channels/@me")}>
          Register
        </button>
        <div className="signup-modal__switch">
          <p>
            Already have an account?
            <a
              href="#"
              onClick={() => {
                close("signup");
                open("login");
              }}
            >
              Login
            </a>
          </p>
        </div>
      </form>
    </dialog>
  );
};
