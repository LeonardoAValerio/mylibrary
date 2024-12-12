import { FunctionComponent, ReactNode } from "react"
import { NavHome } from "../NavHome";

interface PageProps {
    children: ReactNode
}

export const Page: FunctionComponent<PageProps> = ({ children }) => {
    return (
    <div className="page">
        <NavHome></NavHome>
        {children}
    </div>);
}
