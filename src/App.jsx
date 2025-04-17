import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer";
import Routes from "./routes";
import AuthProvider from "./provider/authProvider";

export default function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes />
      <Footer />
    </AuthProvider>
  );
}
