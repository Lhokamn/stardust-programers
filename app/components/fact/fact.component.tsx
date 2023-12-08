import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import styles from './fact.module.css';

export default function Fact({fact}: {fact: string}) {
    return(
        <div className={styles.fact}>
            <CheckSharpIcon fontSize='large' className={styles.factIcon}></CheckSharpIcon>
            <p className={styles.factText}>{fact}</p>            
        </div>
    )
}