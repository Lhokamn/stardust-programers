import { HeroItemPropsType } from "@/app/types/hero.type";
import styles from './hero-item.module.css'

export default function HeroItem({heroItem}: HeroItemPropsType) {
    return (
        <div className={styles.heroItem}>
            <h3 className={styles.heroItemTitle}>{heroItem.title}</h3>
        </div>
    )
}