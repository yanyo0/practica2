
import React from "react";
import ContainCard from "./components/ContainCard.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import { useState } from "react";
import style from "./App.module.css";
import { GiUbisoftSun, GiMoon } from "react-icons/gi";

function App() {

  const apiKey = process.env.REACT_APP_API_KEY
  
  const [cities, setCities] = useState([]);

  const [errorData , setErrorData] = useState("")

  const [include, setInclude] = useState([])

  const [modeLigth, setmodeLigth] = useState(false)


   const onClose = (id) => {
    setCities(cities.filter(city => city.id !== Number(id)))
   
   }


    const  search = async (ciudad) => {
      
      try{
         const response =  await axios(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
         const data = response
        
         setCities([...cities, 
          {name: data.data.name,
           id: data.data.id,
           min: data.data.main.temp_min,
           max: data.data.main.temp_max,
           img: data.data.weather[0].icon,
           wind: data.data.wind.speed,
           temp: data.data.main.temp,
           weather: data.data.weather[0].main,
           clouds: data.data.clouds.all,
           latitud: data.data.coord.lat,
           longitud: data.data.coord.lon

          }])
        
          setErrorData("")
        } catch (error) {
         console.log(error)
         setErrorData("* La cuidad no existe")
        }
     }

     const changeMode = () => {
      setmodeLigth(!modeLigth)
     }


    return (
      <div className={ modeLigth ? style.ligthMode : style.darkMode } >

        <Nav onSearch={search} errorData={errorData} modeLigth={modeLigth}/>
        {
          modeLigth ? < GiMoon color="blue" className={style.mode} onClick={changeMode} /> : < GiUbisoftSun onClick={changeMode} color="yellow" className={style.mode}/>
        }
        
        <ContainCard cities={cities} onClose={onClose} modeLigth={modeLigth}/>
      </div>
    );
}

export default App;