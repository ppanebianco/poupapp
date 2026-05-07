import styles from './aside.module.css'
import logo from '../../assets/logo.svg'

export const Aside = () => {
   return(
    <aside className={styles.sidebar}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <footer className={styles.footer}>
            Desenvolvido por Alura. Sem fins comerciais. Projeto fictício.
        </footer>
    </aside>
   ) 
}