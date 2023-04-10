import React from "react";
import Logo from "../images/logoAda.png";
import SearchBar from "./SearchBar.jsx";
import style from "./Nav.module.css";

function Nav({ onSearch, errorData , modeLigth }) {
  return <header className={style.nav} >
    <div className={style.img} >     
    <img src={Logo} alt="logo ADA"  />
    </div>
    <h1 className={ modeLigth ? style.modeLigth : style.title}>Weather View !</h1>
    <SearchBar onSearch={onSearch} errorData={errorData}  />
    </header>;
}

export default Nav;
