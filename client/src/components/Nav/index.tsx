import { FunctionComponent } from "react"
import './nav.css'
import { UserComponent } from "../UserComponent";
import { OptionNav } from "../OptionNav";
import { setCookie } from "../../helpers/Cookies";
import { authToken } from "../../helpers/Requisition";

export const NavHome: FunctionComponent = () => {
    return (
    <div className="nav-home">
        <UserComponent></UserComponent>
        <nav className="options">
            <OptionNav key="home" path="/" icon="https://cdn-icons-png.flaticon.com/512/25/25694.png">Home</OptionNav>
            <OptionNav key="exit" path="/login" icon="https://cdn-icons-png.flaticon.com/512/1828/1828427.png" functionRequest={() => {
                setCookie(authToken, "");
            }}>Sair</OptionNav>
        </nav>
    </div>);
}
