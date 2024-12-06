import { FunctionComponent } from "react"
import './alert.css'

export enum AlertTypes {
    SUCCESS = "#50FA7B", FAILED = "#FF5555"
}

export interface AlertProps {
    message: string;
    type: AlertTypes;
}

export const Alert: FunctionComponent<AlertProps> = ({ message, type }) => {
    return (
    <div className="alert" style={{background: type}}>
        {message}
    </div>
    );
}