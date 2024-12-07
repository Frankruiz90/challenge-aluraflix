// import { Router, Routes } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer/Footer";
import NewVideo from "./pages/NewVideo/NewVideo";

function App() {
  return (
    <>
      <Router>
          <Nav />
        <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/new-video" element={<NewVideo />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
