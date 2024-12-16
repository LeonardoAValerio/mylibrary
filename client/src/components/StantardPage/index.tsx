import { FunctionComponent, ReactNode } from "react"
import { NavHome } from "../Nav";
import "./page.css"

interface PageProps {
    children: ReactNode
}

export const Page: FunctionComponent<PageProps> = ({ children }) => {
    return (
    <div className="page">
        <NavHome></NavHome>
        <div className="space-from-nav"></div>
        {children}
    </div>);
}
