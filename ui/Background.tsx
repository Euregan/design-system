import type { ReactNode } from 'react'
import * as styles from './Background.css'

interface Props {
  children: ReactNode
}

export const Background = ({ children }: Props) => (
  <main className={styles.background}>{children}</main>
)

export default Background
