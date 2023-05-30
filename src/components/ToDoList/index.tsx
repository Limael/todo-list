import useToDoContext from '../../Hooks/useToDoContext';
import Trash from '../../assets/trash.svg'
import styles from './index.module.css'

interface TodoListProps {
    onDelete: (id: string) => void;
    onChangeCheckBox: (id: string) => void;
}


export const TodoList = ({ onDelete, onChangeCheckBox }: TodoListProps) => {
    const { taskListState } = useToDoContext()
    return (

        <section className={styles.section_container}>
            {taskListState.map((task) => (
                <article key={task.id} className={styles.content_container}>
                    <input type="checkbox" onChange={() => onChangeCheckBox(task.id)} id={task.id} defaultChecked={task.isDone} />
                    <p className={task.isDone ? styles.text_scratched : styles.text}>{task.description} </p>
                    <img className={styles.img} src={Trash} alt="Icone de lixeira" onClick={() => onDelete(task.id)} />
                </article>
            ))}

        </section>

    )
}