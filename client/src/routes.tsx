import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookDetails } from "./pages/BookDetails";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/books/:id" element={<BookDetails />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}