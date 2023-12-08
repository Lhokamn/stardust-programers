'use client';

import { QuizzPropsType, QuizzQuestionType } from '@/app/types/quizz/quizz.type';
import styles from './quizz.module.css'
import { useState } from 'react';




export default function QuestionSection({questions}: QuizzPropsType){
    const [count,setCount]= useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    //const [answer, setAnswer] = useState('');

    const handleButtonClick = (answer: string, correctAnswer: string) => {
        if(count==0 && answer==correctAnswer){
            const shrek = document.getElementById("shrek");
            
        }
        if (count < questions.length - 1) {
            setCount((prevCount) => prevCount + 1);
        } else {
            setQuizCompleted(true);
        }
      };

    return(
        <div className={styles.QuizzRoot}>
            <div id="shrek"></div>
            {quizCompleted ? (
                <div>
                    <h3>Quiz Terminé</h3>
                    <p>Merci d'avoir répondu à toutes les questions!</p>
                </div>  
            ) : (
            <div className={styles.QuizzRoot}>
                <h3>{questions[count].question}</h3>
                <div className={styles.ButtonContainer}>
                    {questions[count].answers.map((answer: string ) => <button className={styles.ButtonQuizz} aria-label={answer} onClick={() => handleButtonClick(answer, questions[count].correctAnswer)}>{answer}</button>)}
                </div>
            </div>
            )}
        </div>
        
    )

    
}

{/* <div className={styles.QuizzRoot}>
            {questions.map((question: QuizzQuestionType) => {
                return (
                    <>
                        <h3>{question.question}</h3>
                        {question.answers.map((answer: string ) => <button className={styles.BouttonQuizz}>{answer}</button>)}
                    </>
                )
            })}
        </div> */}