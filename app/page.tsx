import HeroSection from './components/hero-section/hero-section.component';
import styles from './page.module.css'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Quizz from './pages/quizz/quizzPage';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={styles.fullPageWrapper}>
        <div className={styles.titlesWrapper}>
          <h1 className={styles.title}>Le vrai du faux</h1>
          <h2 className={styles.subTitle}>Le réchauffement climatique</h2>
        </div>
        <KeyboardArrowDownRoundedIcon fontSize='large' className={styles.scrollIcon}></KeyboardArrowDownRoundedIcon>
      </div>

      <div className={styles.fullPageWrapper}>
        <HeroSection></HeroSection>
      </div>
      <Quizz></Quizz>
    </main>
  )
}
