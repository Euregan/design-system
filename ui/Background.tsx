import type { ReactNode } from 'react'
import { useEffect } from 'react'
import * as styles from './Background.css'

interface Props {
  children: ReactNode
  onClick?: () => void
}

export const Background = ({ children, onClick }: Props) => {
  useEffect(() => {
    if (onClick) {
      document.addEventListener('click', onClick)

      return () => document.removeEventListener('click', onClick)
    }
  }, [onClick])

  return <main className={styles.background}>{children}</main>
}

export default Background
