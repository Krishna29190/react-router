import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { HashRouter, Routes, Route } from "react-router-dom"
import About from './components/About';
import Home from './components/Home';


function App() {
  return (
    <div>


      <HashRouter>
        <Nav></Nav>

        <Routes>

          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
        </Routes>



        <Footer></Footer>
      </HashRouter>


    </div>
  );
}

export default App;
