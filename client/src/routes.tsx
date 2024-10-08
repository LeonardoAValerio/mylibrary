import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookDetails } from "./pages/BookDetails";
import { Login } from "./pages/Login";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/books/:id" element={<BookDetails />}> </Route>
                <Route path="/login" element={<Login />}> </Route>
                <Route path="/login/create-account" element={<Home />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}