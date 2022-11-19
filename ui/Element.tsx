import * as styles from './Element.css'

export const Square = () => (
  <div className={styles.square.wrapper}>
    <div className={styles.square.top} />
    <div className={styles.square.bottom} />
    <div className={styles.square.left} />
    <div className={styles.square.right} />
    <div className={styles.square.shadow} />
  </div>
)

export const Circle = () => (
  <div className={styles.circle.wrapper}>
    <div className={styles.circle.top} />
    <div className={styles.circle.bottom} />
    <div className={styles.circle.shadow} />
  </div>
)

export const Button = () => (
  <>
    <div className={styles.button.top} />
  </>
)

export const Text = () => (
  <>
    <div className={styles.textSquare.wrapper}>
      <div className={styles.textSquare.top} />
      <div className={styles.textSquare.bottom} />
      <div className={styles.textSquare.left} />
      <div className={styles.textSquare.right} />
      <div className={styles.textSquare.shadow} />
    </div>
    <div className={styles.textLine1.wrapper}>
      <div className={styles.textLine1.top} />
      <div className={styles.textLine1.bottom} />
      <div className={styles.textLine1.left} />
      <div className={styles.textLine1.right} />
      <div className={styles.textLine1.shadow} />
    </div>
    <div className={styles.textLine2.wrapper}>
      <div className={styles.textLine2.top} />
      <div className={styles.textLine2.bottom} />
      <div className={styles.textLine2.left} />
      <div className={styles.textLine2.right} />
      <div className={styles.textLine2.shadow} />
    </div>
    <div className={styles.textLine3.wrapper}>
      <div className={styles.textLine3.top} />
      <div className={styles.textLine3.bottom} />
      <div className={styles.textLine3.left} />
      <div className={styles.textLine3.right} />
      <div className={styles.textLine3.shadow} />
    </div>
  </>
)
