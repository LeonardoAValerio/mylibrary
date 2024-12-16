import { FunctionComponent } from "react"
import './optionNav.css'
import { useNavigate } from "react-router-dom"

interface OptionNavProps {
    key: string,
    path: string,
    icon: string,
    functionRequest?: CallableFunction
    children: any
}

export const OptionNav: FunctionComponent<OptionNavProps> = ({key, path, icon, functionRequest, children}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(functionRequest) functionRequest();
        navigate(path);
    }

    return (
    <div className="option-nav" onClick={handleClick}>
        <img src={icon} key={key}></img>
        <h4>{children}</h4>
    </div>);
}
