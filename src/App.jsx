import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App(){
  return(
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </BrowserRouter> 
  )
}