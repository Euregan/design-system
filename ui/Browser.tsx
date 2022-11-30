import type { ReactNode } from 'react'
import * as styles from './Browser.css'

interface Props {
  children: ReactNode
  displayed: boolean
  url: string
}

const Browser = ({ children, displayed, url }: Props) => (
  <div className={styles.browser[displayed ? 'displayed' : 'hidden']}>
    <div className={styles.topbar}>
      <div className={styles.buttons}>
        <div className={styles.button.red}></div>
        <div className={styles.button.yellow}></div>
        <div className={styles.button.green}></div>
      </div>
      <div className={styles.url}>{url}</div>
    </div>
    {children}
  </div>
)

export default Browser
