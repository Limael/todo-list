import styles from './index.module.css'
import Plus from '../../assets/plus.svg'
import { NoContent } from '../NoContent'
import { ChangeEvent, useEffect, useState } from 'react'
import { TodoList } from '../ToDoList'
import { Task } from '../../Models/Task'
import { v4 as uuidv4 } from 'uuid';
import { api } from '../../configs/api'
import useToDoContext from '../../Hooks/useToDoContext'
import { useToast } from '../../Hooks/useToast'


export const Content = () => {

    const [description, setDescription] = useState<string>("")
    const { showToast } = useToast();


    const { taskListState, setTaskListState } = useToDoContext()



    const tasksDone = taskListState.filter((task) => {
        return task.isDone !== false;
    })

    const disabledButton = !description.length;

    const addTaskOnList = () => {

        const newTask = {
            id: uuidv4(), // UUID //uid()
            description,
            isDone: false
        }
        api.post("tasks", newTask).then((response) => setTaskListState((currentValue) => [...currentValue, response.data])).finally(() => {
            setDescription('')
            showToast({
                message: 'Tarefa adicionada',
                type: 'success'
            })
        })
        //    setTaskListState((currentValue) => [...currentValue, newTask])

    }

    const removeTaskOnList = (id: string) => {
        api.delete(`tasks/${id}`).then(() => setTaskListState((currentValue) => currentValue.filter(task => task.id !== id)))
    }

    const changeStatusCheckBox = (id: string) => {
        const task = taskListState.find(task => task.id === id)

        if (task) {
            api.patch(`tasks/${id}`, {
                isDone: !task.isDone
            })
        }


        const xebas = taskListState.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    isDone: !task.isDone
                }
            }
            return task;
        })

        setTaskListState(xebas)
    }

    useEffect(() => {
        api.get('tasks').then((response) => setTaskListState(response.data as Task[]))
    }, [setTaskListState])

    return (
        <section className={styles.section_container}>
            <main>
                <article className={styles.input_container}>
                    <input className={styles.input} type="text" value={description} placeholder="Adicione uma nova tarefa" onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)} />

                    <button
                        className={styles.button}
                        onClick={() => addTaskOnList()}
                        disabled={disabledButton}
                    >
                        Criar
                        <img src={Plus} className={styles.img} alt="Icone de mais" />
                    </button>


                </article>
                <article className={styles.contend_header}>
                    <article className={styles.tasks_container}>
                        <p className={styles.task_created}>Tarefas criadas</p>
                        <span className={styles.span_value}>{taskListState.length}</span>
                    </article>
                    <article className={styles.tasks_container}>
                        <p className={styles.task_done}>Tarefas concluídas</p>
                        <span className={styles.span_value}>{tasksDone.length} de {taskListState.length}</span>
                    </article>
                </article>


                {taskListState.length === 0 ? <NoContent /> : <TodoList onDelete={removeTaskOnList} onChangeCheckBox={changeStatusCheckBox} />}


            </main>


        </section>



    )

}

