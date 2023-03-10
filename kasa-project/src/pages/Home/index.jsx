import { Link, useLoaderData } from "react-router-dom"
import Banner from "../../components/banner"
import Card from "../../components/card"
import "./home.scss"

export default function Home() {
    const apartments = useLoaderData()

    return (
        <>
            <section className="home">
                <Banner />
                <div className="cardsContainer">

                    {apartments.map(apartment => (
                        <Link to={apartment.id} key={apartment.id} className="cardsContainer__link">
                            <Card apartment={apartment} />
                        </Link>
                    ))}

                </div>
            </section>
        </>
    )
}

export async function loader() {
    return (await import("../../data/logements.json")).default // chargement au moment ou on l'appel
}