import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as modalHandlers from "../../utilities/modalHandlers";
import { FaPlus, FaEnvelope, FaLock } from "react-icons/fa";
import { useAppDispatch } from "../../hooks/store";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ email: email, password: password }).unwrap();
      dispatch(setCredentials({ accessToken: accessToken as string }));
      setEmail("");
      setPassword("");
      navigate("/channels/@me");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <dialog
      id="login"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === "login") modalHandlers.close("login");
      }}
    >
      <form className="login-modal">
        <span className="login-modal__close" onClick={() => modalHandlers.close("login")}>
          <FaPlus />
        </span>
        <h2 className="login-modal__header">Login</h2>
        <div className="login-modal__input">
          <span>
            <FaEnvelope />
          </span>
          <input id="login-email" type="email" placeholder=" " onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="login-email">Email</label>
        </div>
        <div className="login-modal__input">
          <span>
            <FaLock />
          </span>
          <input id="login-password" type="password" placeholder=" " onChange={(e) => setPassword(e.target.value)} required />
          <label htmlFor="login-password">Password</label>
        </div>
        <button className="login-modal__button" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
        <div className="login-modal__switch">
          <p>
            Don't have an account?
            <a
              href="#"
              onClick={() => {
                modalHandlers.close("login");
                modalHandlers.open("signup");
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
