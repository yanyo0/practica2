import Card from "./Card";
import style from "./ContainCard.module.css"


export default function ContainCard({ cities, onClose, modeLigth }) {

  return (<div className={modeLigth ? style.modeLigth : style.contain} >
    {
      cities.map(elem => 
        <Card key={elem.id} ciudad={elem} onClose={onClose} />
      )
    }
    
  </div>)
}