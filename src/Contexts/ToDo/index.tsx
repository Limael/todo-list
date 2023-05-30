import { createContext, useState } from "react";
import { Task } from "../../Models/Task";

type TodoContextProviderProps = {
    children: React.ReactNode
}

export type TodoContextProps = {
    taskListState: Task[],
    setTaskListState: React.Dispatch<React.SetStateAction<Task[]>>
}

const DEFAULT_VALUES = {
    taskListState: [],
    setTaskListState: () => [{}]
}

const TodoContext = createContext<TodoContextProps>(DEFAULT_VALUES)

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
    const [taskListState, setTaskListState] = useState<Task[]>([])
    return (
        <TodoContext.Provider value={{
            taskListState,
            setTaskListState
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider }


export default TodoContext