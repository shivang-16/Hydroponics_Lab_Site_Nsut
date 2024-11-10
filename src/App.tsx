import './App.css'
;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CoordinatonComittee } from './pages/CoordinationComittee';
import { StudentComittee } from './pages/StudentComittee';
import { Vision } from './pages/Vision';
import { Mission } from './pages/Mission';
import { Contact } from './pages/ContactUs';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/coordinationcomittee" element={<CoordinatonComittee />} />
          <Route path="/studentcomittee" element={<StudentComittee/>} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contactus" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
