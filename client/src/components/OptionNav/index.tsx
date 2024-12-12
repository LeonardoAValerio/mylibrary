import { FunctionComponent } from "react"
import './optionNav.css'
import { useNavigate } from "react-router-dom"

interface OptionNavProps {
    key: string,
    path: string,
    icon: string,
    children: any
}

export const OptionNav: FunctionComponent<OptionNavProps> = ({key, path, icon, children}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }

    return (
    <div className="option-nav" onClick={handleClick}>
        <img src={icon} key={key}></img>
        <h4>{children}</h4>
    </div>);
}
