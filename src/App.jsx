
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


  const [modeLigth, setmodeLigth] = useState(false)


   const onClose = (id) => {
    setCities(cities.filter(city => city.id !== Number(id)))
   
   }


    const  search = async (ciudad) => {
      
      try{
         const { data } =  await axios(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
         console.log(data)

         if(!cities.find(city => city.id === data.id)){
         setCities([...cities, 
          {name: data.name,
           id: data.id,
           min: data.main.temp_min,
           max: data.main.temp_max,
           img: data.weather[0].icon,
           wind: data.wind.speed,
           temp: data.main.temp,
           weather: data.weather[0].main,
           clouds: data.clouds.all,
           latitud: data.coord.lat,
           longitud: data.coord.lon

         }])
         setErrorData("");
         
        } else {
          setErrorData("* La ciudad ya existe");
         }
        
          
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

        <Nav onSearch={search} errorData={errorData} modeLigth={modeLigth} />
        {
          modeLigth ? < GiMoon color="blue" className={style.mode} onClick={changeMode} /> : < GiUbisoftSun onClick={changeMode} color="yellow" className={style.mode}/>
        }
        
        <ContainCard cities={cities} onClose={onClose} modeLigth={modeLigth}/>
      </div>
    );
}

export default App;