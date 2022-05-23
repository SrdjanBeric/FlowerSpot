import React from "react";
import Navigationbar from "./components/Navigationbar";
import "./components/style/Main.css";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <div className="main-page">
            <Navigationbar />
            <HomePage />
        </div>
    );
}

export default App;
