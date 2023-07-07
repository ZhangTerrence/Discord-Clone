import { useNavigate } from "react-router-dom";
import { open, close } from "../../utilities/modalHandlers";
import { FaPlus, FaEnvelope, FaLock } from "react-icons/fa";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <dialog
      id="login"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === "login") close("login");
      }}
    >
      <form className="login-modal">
        <span className="login-modal__close" onClick={() => close("login")}>
          <FaPlus />
        </span>
        <h2 className="login-modal__header">Login</h2>
        <div className="login-modal__input">
          <span>
            <FaEnvelope />
          </span>
          <input id="login-email" type="email" placeholder=" " required />
          <label htmlFor="login-email">Email</label>
        </div>
        <div className="login-modal__input">
          <span>
            <FaLock />
          </span>
          <input id="login-password" type="password" placeholder=" " required />
          <label htmlFor="login-password">Password</label>
        </div>
        <button className="login-modal__button" onClick={() => navigate("/channels/@me")}>
          Login
        </button>
        <div className="login-modal__switch">
          <p>
            Don't have an account?
            <a
              href="#"
              onClick={() => {
                close("login");
                open("signup");
              }}
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </dialog>
  );
};
