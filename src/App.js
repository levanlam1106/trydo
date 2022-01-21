import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Home />
                <Routes></Routes>
            </Router>
        </>
    );
}

export default App;
