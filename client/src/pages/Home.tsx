import Logo from "../assets/images/Logo.png";

import { open } from "../utilities/modalHandlers";

import { Login } from "../components/AuthModals/Login";
import { Signup } from "../components/AuthModals/Signup";

function Home() {
  return (
    <div className="home-page">
      <header className="home-page__header">
        <img src={Logo} alt="logo" />
        <h1>Discord Clone</h1>
      </header>
      <div className="home-page__buttons">
        <button onClick={() => open("login")}>Login</button>
        <button onClick={() => open("signup")}>Signup</button>
      </div>
      <Login />
      <Signup />
    </div>
  );
}

export default Home;
