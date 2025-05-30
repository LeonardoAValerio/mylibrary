import { FunctionComponent } from "react"
import './addButton.css'
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
    <div className="add-button" onClick={handleClick}>
        <h2>+</h2>
    </div>);
}
