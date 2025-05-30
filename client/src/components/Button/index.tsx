import { FunctionComponent, ReactNode, useRef } from "react"
import { useNavigate } from "react-router-dom";
import "./button.css"

interface ButtonProps {
    color?: string;
    path?: string; 
    children: ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = ({ path, children, color }) => {
    const navigate = useNavigate();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const colorButton = color || "var(--theme-color)";
    const border = "1px solid " + colorButton;

    const handleClick = () => {
        if(path) navigate(path);
    }
    
    return <button className="button" onClick={handleClick} ref={buttonRef} style={{background: colorButton, border: border}}>
        {children}
        </button>;
}
