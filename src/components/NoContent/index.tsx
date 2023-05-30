import styles from './index.module.css'
import Clipboard from '../../assets/clipboard.svg'


export const NoContent = () => {
    return (
        <section className={styles.section_container}>
            <img src={Clipboard} alt="Icone clipboard" />
            <p className={styles.text}>
                <strong> Você ainda não tem tarefas cadastradas </strong>
                Crie tarefas e organize seus itensa fazer
            </p>
        </section>
    )

}