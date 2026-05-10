import { MyAccountsItems } from '../MyAccountsItems'
import { Button } from "../Button"
import styles from './my-accounts.module.css'
import { IconWallet } from '../Icons'

export const MyAccounts = () => {

    const accounts = [
        {
            "description": "AnyBank",
            "balance": 2000
        },
        {
            "description": "SouBank",
            "balance": 12000
        },
        {
            "description": "SouBank",
            "balance": 12000
        },
    ]

    return (
        <>
            <ul className={styles.list}>
                {accounts.map((account, index) => {
                    return (
                        <li key={index}>
                            <MyAccountsItems account={account} />
                        </li>
                    )
                })}
            </ul>
            <div className={styles.actions}>
                <Button>
                    <IconWallet /> Adicionar Saldo
                </Button>
            </div>
        </>
    )
}