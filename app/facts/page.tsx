'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { FactsService } from '../services/facts-service';
import { Logger } from '../services/logger-service';
import Fact from '../components/fact/fact.component';

export default function InfiniteFacts() {
    const [facts, setFacts] = useState<string[]>([]);

    const updateFacts = async () => {
        const newFacts = (await FactsService.getNextFacts()).data;
        setFacts(facts => [...facts, ...newFacts]);
    }
    

    useEffect(() => {
        updateFacts();
        const detecterFinDePage = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                updateFacts();
            }
        };

        window.addEventListener("scroll", detecterFinDePage);

        return () => window.removeEventListener("scroll", detecterFinDePage);
    }, []);

    useEffect(() => {
        Logger.debug('facts changed, facts length:')
        Logger.debug(facts.length)
    } , [facts])

    return (
        <div className={styles.facts}>
            <div className={styles.factsContent}>
                <h2 className={styles.pageTitle}>Infinite facts about climate change</h2>
                {facts.map((fact, key) => <Fact fact={fact} key={key}></Fact>)}
            </div>
        </div>
    )
}