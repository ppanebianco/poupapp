import styles from './card.module.css'

const Card = ({children}) => {
    return(
        <div className={styles.card}>
            {children}
        </div>
    )
}

export const CardHeader = ({children}) => {
    return(
        <div className={styles.header}>
            {children}
        </div>
    )
}

export const CardBody = ({children}) => {
    return(
        <div className={styles.body}>
            {children}
        </div>
    )
}

Card.CardHeader = CardHeader
Card.CardBody = CardBody

export default Card