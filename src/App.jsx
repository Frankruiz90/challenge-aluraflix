// import { Router, Routes } from "react-router-dom";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer/Footer";
import NewVideo from "./pages/NewVideo/NewVideo";
import Page404 from "./pages/404/Page404";
import { VideoProvider } from "./context/VideoContext";

function App() {
  return (
    <>
    <VideoProvider>
      <Router>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new-video" element={<NewVideo />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </VideoProvider>
    </>
  );
}

export default App;
