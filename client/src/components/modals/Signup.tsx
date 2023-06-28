import { FaPlus, FaEnvelope, FaLock } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

function Signup() {
  const close = () => {
    const modal = document.getElementById("signup") as HTMLDialogElement;
    modal.classList.remove("active");
    setTimeout(() => {
      modal.close();
    }, 200);
  };

  return (
    <dialog
      id="signup"
      onClick={(e) => {
        e.preventDefault();
        if ((e.target as HTMLElement).id === "signup") {
          close();
        }
      }}
    >
      <form method="dialog">
        <span className="close-icon" onClick={close}>
          <FaPlus />
        </span>
        <h2>Register</h2>
        <div className="input-box">
          <span>
            <IoPerson />
          </span>
          <input id="signup-username" type="username" placeholder=" " required />
          <label htmlFor="signup-username">Username</label>
        </div>
        <div className="input-box">
          <span>
            <FaEnvelope />
          </span>
          <input id="signup-email" type="email" placeholder=" " required />
          <label htmlFor="signup-email">Email</label>
        </div>
        <div className="input-box">
          <span>
            <FaLock />
          </span>
          <input id="signup-password" type="password" placeholder=" " required />
          <label htmlFor="signup-password">Password</label>
        </div>
        <button>Register</button>
        <div className="login-box">
          <p>
            Already have an account?
            <a
              href="#"
              onClick={() => {
                close();
                const otherModal = document.getElementById("login") as HTMLDialogElement;
                otherModal.showModal();
                otherModal.classList.add("active");
              }}
            >
              Login
            </a>
          </p>
        </div>
      </form>
    </dialog>
  );
}

export default Signup;
