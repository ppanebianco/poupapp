import styles from './tipography.module.css'

const TAGS = {
    h1: 'h1',
    h2: 'h2',
    body: 'p'
}

export const Tipography = ({children, variant}) => {
    return (
        <p className={styles.tipography}>
            {children}
        </p>
    )
}