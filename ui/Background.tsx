import type { ReactNode } from 'react'
import { useEffect } from 'react'
import * as styles from './Background.css'

interface Props {
  children: ReactNode
  onClick?: () => void
  onRightClick?: () => void
}

export const Background = ({ children, onClick, onRightClick }: Props) => {
  useEffect(() => {
    if (onClick) {
      document.addEventListener('click', onClick)

      return () => {
        document.removeEventListener('click', onClick)
      }
    }
  }, [onClick])
  useEffect(() => {
    if (onRightClick) {
      const handler = (event: MouseEvent) => {
        event.preventDefault()
        onRightClick()
      }
      document.addEventListener('contextmenu', handler)

      return () => {
        document.removeEventListener('contextmenu', handler)
      }
    }
  }, [onRightClick])

  return <main className={styles.background}>{children}</main>
}

export default Background
