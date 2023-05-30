import TodoContext, { TodoContextProps } from "../../Contexts/ToDo"
import { useContext } from "react"

const useToDoContext = () => {
    const todoContext = useContext<TodoContextProps>(TodoContext)

    return todoContext;
}

export default useToDoContext;