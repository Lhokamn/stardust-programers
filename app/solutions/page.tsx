import SoluceCard from '../components/solutions/soluce-card/soluce-card'
import styles from './page.module.css'

export default function Solutions() {
  return (
    <main className={styles.main}>
        
        <div className={styles.titleBox}>
            <h2>Capybara capybara</h2>
            <h3>mais non ???</h3>
        </div>
        
        <div className={styles.cardsBox}>
            <SoluceCard num="1" text="Gros caca qui pue"></SoluceCard>
            <SoluceCard num="2" text="Moi aussi je veux du caca"></SoluceCard>
            <SoluceCard num="3" text="D'acc"></SoluceCard>
        </div>
    </main>
  )
}