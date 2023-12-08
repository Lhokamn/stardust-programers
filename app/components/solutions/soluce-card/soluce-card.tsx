"use client"
import { useState } from 'react'
import styles from './soluce-card.module.css'



export default function SoluceCard(props: any) {

    function flipCard(event: React.MouseEvent<HTMLElement>) {
        setCardFlipping(!cardFlipping)
    } 

const [cardFlipping, setCardFlipping] = useState(false);

  return (
    <div className={styles.flipContainer}>
        <div className={[styles.card, cardFlipping && styles.flip].join(' ')}>
            <div className={styles.front} onClick={flipCard}>SOLUTION {props.num}</div>
            <div className={styles.back} onClick={flipCard}>
                <p className={styles.textCard}>{props.text}</p>
            </div>
        </div>
    </div>
  )
}