import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntryAccount from "./Pages/EntryAccount";
import CreateAccount from "./Pages/CreateAccount";
import Home from './Pages/Home'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } ></Route>
                <Route path="/entrar" element={ <EntryAccount /> } ></Route>
                <Route path="/cadastrar-se" element={ <CreateAccount /> } ></Route>
            </Routes>
        </BrowserRouter>
    )
}