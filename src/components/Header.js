import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToLoginPage} from "../router/coordinator";
import "./styles.css";
import imgLogo from "../assets/img/imgLogo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = location.pathname === "/register" ? false : true;
  
  
  return (
    <div className="header">
      <img className="img-header" src={imgLogo} alt="Logo img" />
      {isLoggedIn ? (
        <a className="entrar" href="/" onClick={() => goToLoginPage(navigate)}>Logout</a>
      ) : (
        <a className="entrar" href="/" onClick={() => goToLoginPage(navigate)}>Entrar</a>
      )}
    </div>
  );
};

export default Header;
