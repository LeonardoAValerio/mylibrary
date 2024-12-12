import { FunctionComponent } from "react"
import './nav.css'
import { useNavigate } from "react-router-dom"

interface PropsAddButton {
    pathAddPage: string
}

export const AddButton: FunctionComponent<PropsAddButton> = ({pathAddPage}) => {
    const navigate = useNavigate();

    const handleClick = (e: any) => {
        navigate(pathAddPage);
    }

    return (
    <div className="button-add" onClick={handleClick}>
        <div>+</div>
    </div>);
}
