import { Button } from "../Button"
import { IconCurrency } from "../Icons"
import { TransactionItem } from "../TransactionItem"

import styles from "./transactions.module.css"

export const Transactions = () => {

    const items = [
        {
            "description": "ifood",
            "value": -20,
            "date": "2024-06-01T00:00:00-03:00"
        },
        {
            "description": "uber",
            "value": -55,
            "date": "2024-06-10T00:00:00-03:00"
        },
        {
            "description": "Salário",
            "value": 2500,
            "date": "2024-06-15T00:00:00-03:00"
        },
    ]

    return (
        <>
            <ul className={styles.list}>
                {items.map((transactionItem, index) => {
                    return (
                        <li key={index}>
                            <TransactionItem item={transactionItem} />
                        </li>
                    )
                })}
            </ul>
            <div className={styles.actions}>
                <Button>
                    <IconCurrency /> Adicionar transação
                </Button>
            </div>
        </>
    )
}