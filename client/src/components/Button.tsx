import { FunctionComponent, ReactNode } from "react"

interface ButtonProps {
    theme?: string
    children?: ReactNode
}

const Button: FunctionComponent<ButtonProps> = ({ theme }) => {
    return <button>${theme}</button>;
}

export default Button;