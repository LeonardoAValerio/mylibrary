import { FunctionComponent, ReactNode } from "react"
import './field.css'

interface FieldProps {
    label?: ReactNode,
    children: ReactNode
}

const Field: FunctionComponent<FieldProps> = ({ children }) => {
    return (
    <div className="field">
        {children}
    </div>);
}

export default Field;