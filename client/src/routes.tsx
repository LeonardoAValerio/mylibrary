import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookDetails } from "./pages/BookDetails";
import { Login } from "./pages/Login";
import { CreateAccount } from "./pages/CreateAccount";
import { ProtectedRoute } from "./security/ProtectedAccesedRoutes";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}> </Route>
                <Route path="/books/:id" element={<ProtectedRoute><BookDetails /></ProtectedRoute>}> </Route>
                <Route path="/login" element={<Login />}> </Route>
                <Route path="/login/create-account" element={<CreateAccount />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}