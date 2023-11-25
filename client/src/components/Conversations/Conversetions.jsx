import styles from './styles.module.css'

export default function Conversetion(){
    return(
        <div className={styles.conversation}>
             <img  className={styles.conversationImg} src='https://www.jtrholidays.com/static/img/bucket/Tours/UAE/Dubai/Theme-Park/IMG-World-of-Adventure/IMG-World-of-Adventure-03.jpg'/>
             <span className={styles.conversationName}>John</span>
        </div>
    )
}