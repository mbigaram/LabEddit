// import React from 'react'
// import "./styles.css"
// import imgLogo from "../assets/img/imgLogo.png"


// const Header = () => {
//   return (
//     <div className="header">
//         <img className="img-header" src={imgLogo} alt="Logo img" />
//         <a className="entrar">Entrar</a></div>
//   )
// }

// export default Header

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToLoginPage} from "../router/coordinator";
import "./styles.css";
import imgLogo from "../assets/img/imgLogo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = location.pathname === "/register" ? false : true;
  
  const handleLogoutClick = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <img className="img-header" src={imgLogo} alt="Logo img" />
      {isLoggedIn ? (
        <a className="logout" href="/" onClick={handleLogoutClick}>Logout</a>
      ) : (
        <a className="entrar" href="/" onClick={() => goToLoginPage(navigate)}>Entrar</a>
      )}
    </div>
  );
};

export default Header;
