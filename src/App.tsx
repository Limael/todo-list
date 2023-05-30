import { TodoContextProvider } from "./Contexts/ToDo"
import { ToastProvider } from "./Contexts/Toast"
import { Content } from "./components/Content"
import { Header } from "./components/Header"

function App() {

  return (
    <ToastProvider>

      <TodoContextProvider>
        <Header />
        <Content />
      </TodoContextProvider>

    </ToastProvider>
  )
}

export default App
