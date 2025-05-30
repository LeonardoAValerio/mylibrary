import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { CreateAccount } from "./pages/CreateAccount";
import { ProtectedRoute } from "./security/ProtectedAccesedRoutes";
import { BookPage } from "./pages/BookPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}> </Route>
                <Route path="/books/:id" element={<ProtectedRoute><BookPage /></ProtectedRoute>}> </Route>
                <Route path="/login" element={<Login/>}> </Route>
                <Route path="/login/create-account" element={<CreateAccount />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}