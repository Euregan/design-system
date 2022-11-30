import type { ReactNode } from 'react'
import { useEffect } from 'react'
import * as styles from './Background.css'

interface Props {
  children: ReactNode
  onLeftClick?: () => void
  onRightClick?: () => void
}

export const Background = ({ children, onLeftClick, onRightClick }: Props) => {
  useEffect(() => {
    if (onLeftClick) {
      document.addEventListener('click', onLeftClick)

      return () => {
        document.removeEventListener('click', onLeftClick)
      }
    }
  }, [onLeftClick])
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
