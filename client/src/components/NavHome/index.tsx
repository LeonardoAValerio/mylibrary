import { FunctionComponent } from "react"
import './nav.css'
import { UserComponent } from "../UserComponent";
import { OptionNav } from "../OptionNav";

export const NavHome: FunctionComponent = () => {
    return (
    <div className="nav-home">
        <UserComponent></UserComponent>
        <nav className="options">
            <OptionNav key="home" path="/" icon="https://cdn-icons-png.flaticon.com/512/25/25694.png">Home</OptionNav>
        </nav>
    </div>);
}
