import { useContext } from "react"
import ToastContext, { ToastContextProps } from "../../Contexts/Toast";

const useToast = (): ToastContextProps => {
    const context = useContext<ToastContextProps>(ToastContext)

    if (!context) {
        throw new Error('useToast muse br used whithin a ToastProvider')
    }

    return context;
}

export { useToast }
