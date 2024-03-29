import './APP.css';
import { Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { Home } from './pages/Home';
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { EnlacePages } from "./pages/EnlacePage";
import { NotFound } from "./pages/NotFound";
import { User } from "./pages/user";

function App() {
  return (
    <main>
       <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/enlace/:id" element={<EnlacePages />} />
          <Route path="/user/*" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       <Footer />
    </main>
  );
}

export default App;

