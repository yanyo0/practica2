import { useState } from "react";
import style from "./SearchBar.module.css"


export default function SearchBar({ onSearch, errorData }) {

  const [valueSearch , setValueSearch] = useState("")

  const [errorsSearch , setErrorsSearch] = useState("")

  const validate = (search) => {
    if(search === ""){
      setErrorsSearch("* Ingrese una cuidad")
    } else if(!/^[a-z A-Z]+$/i.test(search)){
      setErrorsSearch("* No debe ingresar numeros")
    } else {
      setErrorsSearch("")
    }
  }

  return <div className={style.searchBar}>
    <form className={style.form} action="" onSubmit={ (e) => {
     e.preventDefault();
     onSearch(valueSearch);
     
    }}>
    <input className={style.inputSearch} type="text" placeholder="Ingrese nombre de ciudad .."
     onChange={(e) => {
      setValueSearch(e.target.value);
      validate(e.target.value)}}/>
    <button className={style.btnSearch} type="submit" >Agregar</button>
    </form>
    <p className={style.red}>{errorsSearch}</p>
    <p className={style.red}>{errorData}</p>
  </div>;
}
