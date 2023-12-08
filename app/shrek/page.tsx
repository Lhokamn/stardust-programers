import ChatbotInput from '@/components/chat-inut/chat-input'
import styles from './page.module.css'
import Image from 'next/image'
export default function Shrek() {

    const handleSendMessage = (message: any) => {
        // À ce stade, vous pouvez envoyer le message au chatbot ou effectuer toute autre action nécessaire
        console.log('Message envoyé au chatbot:', message);
    };

    return (
        <main className={styles.main}>
            <div className={styles.center}>
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
                <div className={styles.styledTextContainer}>
                    <p className={styles.styledText}>
                        Bienvenue dans le monde stylisé ! Ce texte est stylisé avec des propriétés CSS.
                    </p>
                    
                </div>
                <div>
                        <ChatbotInput />
                    </div>
            </div>
        </main>
    )
}