import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { Users } from "./pages/Users"
import { OneUser } from "./pages/OneUser"

export default function Router(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/users" element={<Users />} />
                <Route path="/user/:id" element={<OneUser />} />
            </Routes>
        </>
    )
}