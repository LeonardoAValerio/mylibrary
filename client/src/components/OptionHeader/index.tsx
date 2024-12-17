import { FunctionComponent } from "react";

import "./optionHeader.css"

interface OptionHeaderProps {
    runFunction: (...args: any) => void
    children: any;
}

export const OptionHeader: FunctionComponent<OptionHeaderProps> = ({runFunction, children}) => {
    return <h3 onClick={runFunction} className="option-header">{children}</h3>
}