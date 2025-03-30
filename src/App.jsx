import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ReactLenis from 'lenis/react'
import Test from './test';
import Home from './Home';
import { NavBar } from './components/NavBar';


function App() {

 return (
    <section className="items-center text-white bg-black ">
      <Router>
        {/* Navbar pour naviguer */}
           {/* <NavBar/> */}
        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home */}
        </Routes>
      </Router>
    </section>
  );
}

export default App
