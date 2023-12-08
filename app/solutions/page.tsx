import SoluceCard from '../components/solutions/soluce-card/soluce-card'
import styles from './page.module.css'

export default function Solutions() {
    const componentList: React.JSX.Element[] = [];
    const tabSoluce = [
        "Réduire la consommation d'énergie à la maison",
        "Utiliser des ampoules LED",
        "Éteindre les appareils électroniques",
        "Recycler et réduire les déchets",
        "Utiliser les transports en commun",
        "Opter pour des véhicules à faible émission",
        "Privilégier les sources d'énergie renouvelable",
        "Consommer  des produits locaux et de saison",
        "Réduire la consommation de viande et adopter un régime alimentaire durable",
        "Planter des arbres",
        "Participer à des initiatives de nettoyage de l'environnement",
        "Économiser l'eau",
        "S'impliquer dans des projets communautaires écologiques",
        "Éduquer les autres sur les enjeux climatiques",
        "Soutenir des organisations environnementales",
    ]
    
    let n = 0;
    tabSoluce.forEach((soluce) => {
        n = n + 1;
        componentList.push(<SoluceCard num={n} text={soluce}/>);
    })

  return (
    <main className={styles.main}>

        <div className={styles.titleBox}>
            <h2>Quelles solutions ?</h2>
            <h3>A mon echelle</h3>
        </div>
        
        <div className={styles.cardsBox}>
            {componentList}
        </div>
    </main>
  )
}