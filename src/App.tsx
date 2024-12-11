import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vision } from './pages/Vision';
import { Mission } from './pages/Mission';
import { Training } from './pages/Training';
import { Contact } from './pages/ContactUs';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/training" element={<Training />} />
            <Route path="/contactus" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
