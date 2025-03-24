import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./components/Footer";
import Router from "./Router";


export default function App(){
  return(
  <BrowserRouter>
    <Header />
      <Router />
    <Footer />
  </BrowserRouter> 
  )
}