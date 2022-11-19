import type { ReactNode } from 'react'
import * as styles from './Illustration.css'

interface Props {
  children: ReactNode
}

export const Illustration = ({ children }: Props) => (
  <section className={styles.illustration}>{children}</section>
)

export default Illustration
