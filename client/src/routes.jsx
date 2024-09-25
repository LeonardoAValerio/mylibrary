import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntryAccount from "./Pages/EntryAccount";
import CreateAccount from "./Pages/CreateAccount";
import Home from './Pages/Home'
import SessionsProtecterRoutes from './SessionsRoutes'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ 
                    <SessionsProtecterRoutes>
                        resource={""}
                        children=<Home /> 
                    </SessionsProtecterRoutes>}>
                </Route>
                <Route path="/entrar" element={ <EntryAccount /> } ></Route>
                <Route path="/cadastrar-se" element={ <CreateAccount /> } ></Route>
            </Routes>
        </BrowserRouter>
    )
}