import { FunctionComponent, ReactNode } from "react"
import './field.css'

interface FieldProps {
    sizeInPercent?: "25%" | "45%" | "50%" | "100%",
    children: ReactNode
}

export const Field: FunctionComponent<FieldProps> = ({ children, sizeInPercent }) => {
    return (
    <div className="field" style={{width: sizeInPercent ?? "100%"}}>
        {children}
    </div>);
}
