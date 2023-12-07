import { HeroItemType } from '@/app/types/hero.type';
import styles from './hero-section.module.css';
import HeroItem from './hero-item/hero-item.component';

export default function HeroSection() {

    const heroItems: HeroItemType[] = [
        {
            route: '/quizz',
            imagePath: '',
            title: 'quizz'
        }
    ]

    return(
        <div className={styles.heroSectionRoot}>
            {heroItems.map((item: HeroItemType, key: number) => <HeroItem key={key} heroItem={item}></HeroItem>)}
        </div>
    )
}