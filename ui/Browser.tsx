import * as styles from './Browser.css'

const Browser = () => (
    <div className={styles.topBar}>
        <div className={styles.buttons}>
            <div className={styles.redButtons}></div>
            <div className={styles.yellowButtons} ></div>
            <div className={styles.greenButtons}></div>
            <div className={styles.url}>
                <p className={styles.paragraph}>http://www.design-system.com</p>
            </div>
        </div>
    </div>
)
     
export default Browser
