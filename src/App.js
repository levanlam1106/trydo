import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Home />
                <Service />
                <About />
                <Portfolio />
            </Router>
        </>
    );
}

export default App;
