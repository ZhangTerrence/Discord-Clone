import { FaPlus, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const close = () => {
    const modal = document.getElementById("login") as HTMLDialogElement;
    modal.classList.remove("active");
    setTimeout(() => {
      modal.close();
    }, 200);
  };

  return (
    <dialog
      id="login"
      onClick={(e) => {
        e.preventDefault();
        if ((e.target as HTMLElement).id === "login") {
          close();
        }
      }}
    >
      <form method="dialog">
        <span className="close-icon" onClick={close}>
          <FaPlus />
        </span>
        <h2>Login</h2>
        <div className="input-box">
          <span>
            <FaEnvelope />
          </span>
          <input id="login-email" type="email" placeholder=" " required />
          <label htmlFor="login-email">Email</label>
        </div>
        <div className="input-box">
          <span>
            <FaLock />
          </span>
          <input id="login-password" type="password" placeholder=" " required />
          <label htmlFor="login-password">Password</label>
        </div>
        <button
          onClick={() => {
            navigate("/channels/@me");
          }}
        >
          Login
        </button>
        <div className="register-box">
          <p>
            Don't have an account?
            <a
              href="#"
              onClick={() => {
                close();
                const otherModal = document.getElementById("signup") as HTMLDialogElement;
                otherModal.showModal();
                otherModal.classList.add("active");
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
