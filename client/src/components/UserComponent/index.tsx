import { jwtDecode } from "jwt-decode";
import { FunctionComponent, useEffect, useState } from "react"
import { getCookie } from "../../helpers/Cookies";
import { PayloadToken } from "../../helpers/PayloadToken";
import "./userComponent.css"

export const UserComponent: FunctionComponent = () => {
    const [userName, setUserName] = useState<string>("");

    useEffect(() => {
        const token = getCookie("authToken");
        if(!token) throw new Error("Invalid token!");

        const decoded = jwtDecode<PayloadToken>(token);
        setUserName(decoded.name);
        console.log(decoded);
    }, []);
    
    return (
    <div className="user-component">
        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"></img>
        <h3>{userName}</h3>
    </div>);
}
