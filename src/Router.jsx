import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { UpdateUser} from "./pages/UpdateUser"
import { Users } from "./pages/Users"
import { OneUser } from "./pages/OneUser"
import { LoginUser } from "./pages/LoginUser"

export default function Router(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LoginUser />} />
                <Route path="/updateUser/:id" element={<UpdateUser/>} />
                <Route path="/users" element={<Users />} />
                <Route path="/user/:id" element={<OneUser />} />
            </Routes>
        </>
    )
}