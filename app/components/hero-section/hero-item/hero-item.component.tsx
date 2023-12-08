'use client';

import { HeroItemPropsType } from "@/app/types/hero.type";
import styles from './hero-item.module.css'
import Link from "next/link";

export default function HeroItem({heroItem}: HeroItemPropsType) {
    const click = () => {
        
    }
    return (
        <Link href={heroItem.route} className={styles.heroItem}>
            <button className={styles.heroItemTitle} onClick={click}>{heroItem.title}</button>
        </Link>
    )
}