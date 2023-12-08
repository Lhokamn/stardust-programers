import { count } from 'console';
import QuestionSection from '@/app/components/quizz/quizz.component';
import styles from './quizzPage.module.css'
import { q } from '@/app/data/quizz.data'

export default function Quizz() {

    return (
      <main className={styles.main}>
        <h1 className={styles.title}>C'est l'heure du quizz</h1>
        <h2 className={styles.subTitle}>Le réchauffement climatique</h2>
        <QuestionSection questions={q} ></QuestionSection>
      </main>
    )
  }