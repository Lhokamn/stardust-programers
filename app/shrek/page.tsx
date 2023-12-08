import styles from './page.module.css'
import Image from 'next/image'

export default function Shrek() {
    return (
        <main className={styles.main}>
            <div>
                <div className={styles.img}>
                    <Image
                        width={500}
                        height={500}
                        src="/Shrek/Basique/skrek_base.png"
                        alt="Shrek base"
                    />
                    <Image
                        width={500}
                        height={500}
                        src="/Shrek/Basique/shrek_bouche.png"
                        alt="shrek bouche"
                    />
                </div>
            </div>
        </main>
    )
}