import Logo from "../assets/images/Logo.png";

import LoginButton from "../components/buttons/LoginButton";
import SignupButton from "../components/buttons/SignupButton";
import Login from "../components/modals/Login";
import Signup from "../components/modals/Signup";

function Home() {
  return (
    <div className="home-page">
      <header className="home-page-header">
        <img src={Logo} alt="discord logo" />
        <h1>Discord Clone</h1>
      </header>
      <div className="home-page-buttons">
        <LoginButton />
        <SignupButton />
      </div>
      <Login />
      <Signup />
    </div>
  );
}

export default Home;
