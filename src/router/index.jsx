import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter