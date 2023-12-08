'use client';

import { QuizzPropsType, QuizzQuestionType } from '@/app/types/quizz/quizz.type';
import styles from './quizz.module.css'
import { useState } from 'react';
import Image from 'next/image';




export default function QuestionSection({ questions }: QuizzPropsType) {
    const [count, setCount] = useState(0);
    const [nbGoodAnswer, setnbGoodAnswer] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [shrekJugement, setshrekJugement] = useState(false);
    const [shrekFuite, setshrekFuite] = useState(false);

    const handleButtonClick = (answer: string, correctAnswer: string) => {
        if (count == 0 && answer != correctAnswer) {
            setshrekJugement(true);
            setTimeout(() => {
                setshrekJugement(false);
                setshrekFuite(true);
                setTimeout(() => { setshrekFuite(false) }, 1200)
            }, 1750);
        } else {
            if (answer == correctAnswer) {
                setnbGoodAnswer((nbGoodAnswer) => nbGoodAnswer + 1)
            }
            if (count < questions.length - 1) {
                setCount((count) => count + 1);
            } else {
                setQuizCompleted(true);
            }
        }
    };

    return (
        <div className={styles.QuizzRoot}>
            <Image
                width={100}
                height={100}
                src="/img/shrek_abasourdi.png"
                alt="shrek_abasourdi.png"
                className={[styles.shrek1, shrekJugement && styles.jugement].join(' ')}
            />
            <Image
                width={100}
                height={100}
                src="/img/shrek_fuite.png"
                alt="shrek_fuite.png"
                className={[styles.shrek2, shrekFuite && styles.fuite].join(' ')}
            />
            {quizCompleted ? (
                <div>
                    <h3>Quiz Terminé</h3>
                    <p>Merci d&apos;avoir répondu à toutes les questions!</p>
                    <p>Tu as obtenu la note de <strong>{nbGoodAnswer}/{questions.length}</strong></p>
                </div>
            ) : (
                <div className={styles.QuizzRoot}>
                    <h3>{questions[count].question}</h3>
                    <div className={styles.ButtonContainer}>
                        {questions[count].answers.map((answer: string, key: number) => <button key={key} className={styles.ButtonQuizz} aria-label={answer} onClick={() => handleButtonClick(answer, questions[count].correctAnswer)}>{answer}</button>)}
                    </div>
                </div>
            )}
        </div>

    )


}