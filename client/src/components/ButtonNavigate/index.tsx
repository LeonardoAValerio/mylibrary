import { FunctionComponent, ReactNode } from "react"
import { useNavigate } from "react-router-dom";
import "./button.css"

interface ButtonProps {
    color?: string;
    path: string; 
    children: ReactNode;
}

export const ButtonNavigate: FunctionComponent<ButtonProps> = ({ path, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }
    
    return <button className="button" onClick={handleClick}>{children}</button>;
}
