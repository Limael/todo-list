import { createContext, useState } from "react"
import { Toast } from "../../components/Toast";

type Toast = {
    message: string;
    type: 'success' | 'danger';
}

export type ToastContextProps = {
    isHidden: boolean;
    showToast(data: Toast): void
}

type ToastProviderProps = {
    children: React.ReactNode;
}

const ToastContext = createContext<ToastContextProps>({
    isHidden: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    showToast: () => { },

} as ToastContextProps)


const ToastProvider = ({ children }: ToastProviderProps) => {

    const [isHidden, setIsHidden] = useState<boolean>(true)
    const [toast, setToast] = useState<Toast>({
        message: '',
        type: 'success'
    })

    const showToast = ({ message, type }: Toast) => {
        setToast({
            message,
            type
        })

        setIsHidden(false)
        setTimeout(() => {
            setIsHidden(true);
        }, 2800)
    }


    return (
        <ToastContext.Provider value={{ isHidden, showToast }}>
            {!isHidden && <Toast message={toast.message} type={toast.type} />}

            {children}
        </ToastContext.Provider>
    )
}

export { ToastProvider }

export default ToastContext