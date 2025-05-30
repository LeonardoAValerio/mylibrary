import { FunctionComponent } from "react"
import './saveButton.css'

type reqFunction = (...params: any) => Promise<void>;

interface PropsSaveButton {
    requisitionFunction: reqFunction
}

export const SaveButton: FunctionComponent<PropsSaveButton> = ({requisitionFunction}) => {
    const handleClick = (e: any) => {
        requisitionFunction();
    }

    return (
    <div className="save-button" onClick={handleClick}>
        <h2>{"✓"}</h2>
    </div>);
}
