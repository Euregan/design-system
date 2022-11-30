import * as styles from './Stack.css'

interface Props {
  display: 'stack' | 'reactAria' | 'vanillaExtract' | 'storybook' | 'eslint'
}

const Stack = ({ display }: Props) => (
  <div className={styles.background}>
    <ul className={styles.stack[display]}>
      <li className={styles.reactAria}>React Aria</li>
      <li className={styles.vanillaExtract}>Vanilla Extract</li>
      <li className={styles.storybook}>Storybook</li>
      <li className={styles.eslint}>ESLint</li>
    </ul>
  </div>
)

export default Stack
