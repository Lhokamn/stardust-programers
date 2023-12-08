'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { FactsService } from '../services/facts-service';
import { Logger } from '../services/logger-service';
import Fact from '../components/fact/fact.component';
import Image from 'next/image';

export default function InfiniteFacts() {
    const [facts, setFacts] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const updateFacts = async () => {
        setLoading(true);
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
        setLoading(false);
    } , [facts])

    return (
        <div className={styles.facts}>
            <div className={styles.factsContent}>
                <h2 className={styles.pageTitle}>Infinite facts about climate change</h2>
                {facts.map((fact, key) => <Fact fact={fact} key={key}></Fact>)}
                <Image className={[styles.loadingIcon, loading && styles.show].join(' ')} src='loader.svg' height={50} width={50} alt='Loading..'></Image>
            </div>
        </div>
    )
}