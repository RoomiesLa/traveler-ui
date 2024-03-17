import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import Document from "./Document"

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/dashboard" Component={Dashboard} />
                <Route path="/document" Component={Document} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter