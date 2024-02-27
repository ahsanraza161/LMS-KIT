import './global.css';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Home from './components/pages/home';
import Registration from './components/pages/Registration';
import Login from "./components/pages/login"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
