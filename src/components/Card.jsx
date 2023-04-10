import style from "./Card.module.css"

export default function Card({ ciudad, onClose }) {
  
  return (
    <div className={style.card}>

      <button id={ciudad.id} className={style.btnClose} type="button" onClick={ (e) =>  onClose(e.target.id)} 
      >X</button>

      <h2 className={style.title}>Cuidad: {ciudad.name}</h2>
       
      <div className={style.infoCard}>

      <div className={style.infoTemp}>
          <h5>Temp</h5>
          {
            ciudad.temp > 21 ? <p className={style.red}> {ciudad.temp} </p> :  <p className={style.red}>{ciudad.temp} </p>
          }
          
        </div>
        <div className={style.infoTemp}>

          <h5>Min</h5>
          {
            ciudad.min > 21 ? <p className={style.red}> {ciudad.min} </p> :  <p className={style.blue}>{ciudad.min} </p>
          }

        </div>

        <div className={style.infoTemp}>
          
          <h5>Max</h5>
          {
            ciudad.max > 21 ? <p className={style.red}> {ciudad.max} </p> :  <p className={style.blue}>{ciudad.max} </p>
          }
          
        </div>

        <div className={style.imgTemp} >
          <img src={`http://openweathermap.org/img/wn/${ciudad.img}@2x.png`}  alt={ciudad.name} />
        </div>

      </div>
      

    </div>
  );
}
