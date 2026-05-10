import { IconBank } from '../Icons'
import styles from './my-accounts-items.module.css'

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

export const MyAccountsItems = ({account}) => {
    return(
        <div className={styles.account}>
            <div className={styles.accountname}>
                <p><IconBank /> {account.description}</p>
            </div>
            <div className={styles.balance}>
                <p>Saldo</p>
                <p>{formatter.format(account.balance)}</p>
            </div>
        </div>
    )
}