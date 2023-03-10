import "./card.scss"
export default function Card({ apartment }) { 
    return (
        <div className="card">
            <img className="card__img" src={apartment.cover} alt="Logement" />
            <h3 className="card__title"> {apartment.title} </h3>
        </div>
    )
}